import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from "./app/App";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persiststor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,

  document.getElementById("root")
);
