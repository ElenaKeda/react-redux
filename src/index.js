import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { forbiddenWordsMiddleware } from "./redux/middleware";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(forbiddenWordsMiddleware, saga),
});

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
