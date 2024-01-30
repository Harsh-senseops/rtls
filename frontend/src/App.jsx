import "./App.css";
import React from "react";
import {
  Client,
  cacheExchange,
  Provider,
  subscriptionExchange,
  fetchExchange,
} from "urql";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { devtoolsExchange } from "@urql/devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Plant1Dashboard from "./pages/plant-1/plant-1-dashboard";
import { router } from "./routes/routes";

function flattenMenu(menuItems) {
  const flattenedMenu = [];

  function flatten(menu) {
    for (const item of menu) {
      const newItem = { ...item };
      flattenedMenu.push(newItem);
      if (newItem.child) {
        newItem.child = flatten(newItem.child);
      }
    }
  }

  flatten(menuItems);

  let rm = flattenedMenu.filter((item) => item.path);
  return rm;
}
const flattenedArray = flattenMenu(router);
// const routers = createBrowserRouter(flattenedArray);
function App() {
  const senseopsHTTPServerURL = "http://localhost:5052/graphql";
  const senseopsWSServerURL = "ws://localhost:5052/graphql";
  // const senseopsHTTPServerURL = "http://192.168.29.75:5052/graphql";
  // const senseopsWSServerURL = "ws://192.168.29.75:5052/graphql";
  // const senseopsHTTPServerURL = "http://192.168.208.161:5052/graphql";
  // const senseopsWSServerURL = "ws://192.168.208.161:5052/graphql";

  const subscriptionClient = new SubscriptionClient(senseopsWSServerURL, {
    reconnect: true,
    timeout: 30000,
  });

  const client = new Client({
    url: senseopsHTTPServerURL,
    exchanges: [
      devtoolsExchange,
      cacheExchange,
      fetchExchange,
      subscriptionExchange({
        forwardSubscription: (operation) =>
          subscriptionClient.request(operation),
      }),
    ],
  });
  // window.addEventListener("beforeunload", function (event) {
  //   this.localStorage.clear();
  // });

  return (
    <>
      <Provider value={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/plant2/dashboard" />} />

            {flattenedArray.map((val) => {
              return <Route path={val.path} element={val.element} />;
            })}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
