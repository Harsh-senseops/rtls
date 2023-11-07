const express = require("express");
const { postgraphile, makePluginHook } = require("postgraphile");
const fs = require("fs");
const bodyParser = require("body-parser");
// const resolvers = require('./graphql/resolvers.js');
const { default: PgPubsub } = require("@graphile/pg-pubsub"); // rembember to install through yarn/npm
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const LiveQueriesPlugin = require("@graphile/subscriptions-lds").default;
const bytea = require("./pgBytea");
const pgConfig = {
  db: "postgres://postgres:admin@192.168.29.75/rtls_plant2",
  dbOwner: "postgres://postgres:admin@192.168.29.75/rtls_plant2",
  schema: "public",
  port: 5052,
};
const { makeExtendSchemaPlugin } = require("graphile-utils");
const gql = require("graphql-tag");

const pluginHook = makePluginHook([PgPubsub]);
const typeDefs = gql(
  fs.readFileSync("./graphql/typeDefs.graphql", { encoding: "utf-8" })
);

const resolvers = require("./graphql/resolvers.js");
var cors = require("cors");

const app = express();
app.use(cors());

const MyRegisterUserMutationPlugin = makeExtendSchemaPlugin((build) => {
  const { pgSql: sql } = build;
  return {
    typeDefs: typeDefs,
    resolvers: {
      Mutation: resolvers.Mutation,
      Query: resolvers.Query,
      Subscription: resolvers.Subscription,
    },
  };
});

const postgraphileOptions = {
  pluginHook, // add the plugin hook. This will make the @pgSubscription avaiable in our schema definitions
  subscriptions: true, // start the websocket server
  simpleSubscriptions: true, // Add the `listen` subscription field
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  enableCors: true,
  live: true,
  ownerConnectionString: pgConfig.dbOwner,
  appendPlugins: [
    ConnectionFilterPlugin,
    LiveQueriesPlugin,
    bytea,
    MyRegisterUserMutationPlugin,
  ],
  websocketMiddlewares: [
    // Add whatever middlewares you need here, note that they should only
    // manipulate properties on req/res, they must not sent response data. e.g.:
    //
    //   require('express-session')(),
    //   require('passport').initialize(),
    //   require('passport').session(),
  ],
};

app.use(bodyParser.json({ limit: "10mb" }));

app.use(postgraphile(pgConfig.db, pgConfig.schema, postgraphileOptions));
app.listen(pgConfig.port, () => {
  console.log(`🚀🚀 http://localhost:5052/graphiql 🚀🚀`);
});
