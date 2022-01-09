import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/FindStudy/FindMain";
import FindMember from "./pages/FindStudy/FindMember";
import FindStudy from "./pages/FindStudy/FindStudy";
import Login from "./pages/Users/Login";
import EmailAuth from "pages/Users/EmailAuth";
import SigninReady from "./pages/Users/SigninReady";
import ResetPassword from "pages/Users/ResetPassword";
import EmailSignin from "./pages/Users/Signin";
import FindPassword from "./pages/Users/FindPassword";
import StudyCreation from "./pages/study/Creation";
import StudyDetail from "pages/study/Detail";
import MemberDetail from "pages/member/Detail";
import CreateStudy from "./pages/CreateStudy";
import ProfileDetail from "pages/mypage/profile/Detail";
import ProfileElementRevision from "pages/mypage/profile/ElementRevision";
import ProfilePasswordResetting from "pages/mypage/profile/PasswordResetting";
import ProfileRevision from "pages/mypage/profile/Revision";
import BookMark from "pages/mypage/BookMark";
import StudyActivity from "pages/mypage/StudyActivitiy";
import Component from "pages/test/Component";
import Modal from "pages/test/modal";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/find-member" component={FindMember}></Route>
        <Route exact path="/find-study" component={FindStudy}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/reset-password" component={ResetPassword}></Route>
        <Route exact path="/email-auth" component={EmailAuth}></Route>
        <Route exact path="/signin" component={SigninReady}></Route>
        <Route exact path="/signin-email" component={EmailSignin}></Route>
        <Route exact path="/find-password" component={FindPassword}></Route>
        <Route exact path="/study/creation" component={StudyCreation}></Route>
        <Route exact path="/study/revision" component={StudyCreation}></Route>
        <Route exact path="/study/detail" component={StudyDetail}></Route>
        <Route exact path="/create-study" component={CreateStudy}></Route>
        <Route exact path="/member/detail" component={MemberDetail}></Route>
        <Route
          exact
          path="/mypage/profile/detail"
          component={ProfileDetail}
        ></Route>
        <Route
          exact
          path="/mypage/profile/elementRevision"
          component={ProfileElementRevision}
        ></Route>
        <Route
          exact
          path="/mypage/profile/passwordResetting"
          component={ProfilePasswordResetting}
        ></Route>
        <Route
          exact
          path="/mypage/profile/revision"
          component={ProfileRevision}
        ></Route>
        <Route exact path="/mypage/bookMark" component={BookMark}></Route>
        <Route
          exact
          path="/mypage/studyActivity"
          component={StudyActivity}
        ></Route>
        <Route exact path="/component" component={Component}></Route>
        <Route exact path="/test/modal" component={Modal}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
