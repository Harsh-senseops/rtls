import "./App.css";
import NavBar from "./components/nav-bar";
import ReactApexChart from "react-apexcharts";
import { Client, cacheExchange, fetchExchange, Provider,subscriptionExchange } from "urql";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { devtoolsExchange } from '@urql/devtools';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  let rm = flattenedMenu.filter(item => item.path);
  return rm;
}
const flattenedArray = flattenMenu(router);
// const routers = createBrowserRouter(flattenedArray);
function App() {
  const senseopsHTTPServerURL = "http://127.0.0.1:5052/graphql";
  const senseopsWSServerURL = "ws://127.0.0.1:5052/graphql";

  const subscriptionClient = new SubscriptionClient(senseopsWSServerURL, {
    reconnect: true,
    timeout: 30000,
  });

  const client = new Client({
    url: senseopsHTTPServerURL,
    exchanges: [
      devtoolsExchange,
      cacheExchange, fetchExchange,
      subscriptionExchange({
        forwardSubscription: (operation) => subscriptionClient.request(operation),
      }),
    ],
  });
  return (
    <>
      <Provider value={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Plant1Dashboard />} />
            {flattenedArray.map((val)=>{
              return(
                <Route path={val.path} element={val.element}/>
              )
            })}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
