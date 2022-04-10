import { HelmetProvider } from "react-helmet-async";
import Router from "../Router";
import "css/common.css";

import dotenv from "dotenv";
dotenv.config();

export const BASE_URL = String(process.env.REACT_APP_BASE_URL);

function App() {
  return (
    <>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </>
  );
}

export default App;
