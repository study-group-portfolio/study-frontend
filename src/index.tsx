import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistStor } from 'store/store';
import App from "./app/App";

const client = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStor}>
      <React.StrictMode>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
