import { HelmetProvider } from "react-helmet-async";
import Router from "../Router";
import "../css/common/common.scss";

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
