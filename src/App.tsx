import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #667085;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
