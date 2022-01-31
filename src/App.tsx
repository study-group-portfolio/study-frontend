import { Helmet } from "react-helmet";
import Router from "./Router";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="" />
      </Helmet>
      <Router />
    </>
  );
}

export default App;
