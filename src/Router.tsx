import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FindStudy from "./pages/FindStudy";
import FindMembers from "./pages/FindMember";
import Login from "./pages/Login";
import SigninReady from "./pages/SigninReady";
import FindPassword from "./pages/FindPassword";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/find-study" component={FindStudy}></Route>
        <Route exact path="/find-member" component={FindMembers}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signin-ready" component={SigninReady}></Route>
        <Route exact path="/find-password" component={FindPassword}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
