import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./reducer/appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <RouterProvider router={App} />
    </React.StrictMode>
  </Provider>
);
