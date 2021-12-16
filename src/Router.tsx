import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FindStudy from "./pages/Study/FindStudy";
import FindMembers from "./pages/FindMember";
import Login from "./pages/Login";
import SigninReady from "./pages/SigninReady";
import EmailSignin from "./pages/Signin";
import FindPassword from "./pages/FindPassword";
import CreateStudy from "./pages/CreateStudy";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/find-member" component={FindMembers}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signin" component={SigninReady}></Route>
        <Route exact path="/signin/email" component={EmailSignin}></Route>
        <Route exact path="/find-password" component={FindPassword}></Route>
        <Route exact path="/create-study" component={CreateStudy}></Route>
        <Route exact path="/" component={FindStudy}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
