import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistedStore } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { PersistGate } from "redux-persist/integration/react";

// let persistor = persistStore(store);

// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
