import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/FindStudy/FindMain";
import FindMember from "./pages/FindStudy/FindMember";
import FindStudy from "./pages/FindStudy/FindStudy";
import Login from "./pages/Users/Login";
import SigninReady from "./pages/Users/SigninReady";
import EmailSignin from "./pages/Users/Signin";
import FindPassword from "./pages/Users/FindPassword";
import CreateStudy from "./pages/CreateStudy";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/find-member" component={FindMember}></Route>
        <Route exact path="/find-study" component={FindStudy}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signin" component={SigninReady}></Route>
        <Route exact path="/signin-email" component={EmailSignin}></Route>
        <Route exact path="/find-password" component={FindPassword}></Route>
        <Route exact path="/create-study" component={CreateStudy}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
