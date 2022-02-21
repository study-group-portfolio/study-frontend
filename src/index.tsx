import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistStor } from 'store/store';
import App from "./app/App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
