import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/FindStudy/FindMain";
import FindMember from "./pages/FindStudy/FindMember";
import FindStudy from "./pages/FindStudy/FindStudy";
import Login from "./pages/Users/Login";
import EmailAuth from "pages/Users/EmailAuth";
import SigninReady from "./pages/Users/SigninReady";
import ResetPassword from "pages/Users/ResetPassword";
import SignupWithEmail from "./pages/Users/Signup";
import FindPassword from "./pages/Users/FindPassword";
import StudyCreation from "./pages/study/Creation";
import StudyDetail from "pages/study/Detail";
import MemberDetail from "pages/member/Detail";
import ProfileDetail from "pages/mypage/profile/Detail";
import ProfileElementRevision from "pages/mypage/profile/ElementRevision";
import ProfilePasswordResetting from "pages/mypage/profile/PasswordResetting";
import ProfileRevision from "pages/mypage/profile/Revision";
import BookMark from "pages/mypage/BookMark";
import StudyActivity from "pages/mypage/StudyActivitiy";
import Component from "pages/test/Component";
import Modal from "pages/test/ModalComponent";
import Functional from "pages/test/Functional";
import SiteMap from "pages/SiteMap";
import MyPage from "pages/mypage/MyPage";

import { Path } from "utils/enum";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={Path.메인} component={Main}></Route>
        <Route exact path={Path.스터디_목록} component={FindStudy}></Route>
        <Route exact path={Path.스터디_생성} component={StudyCreation}></Route>
        <Route exact path={Path.스터디_수정} component={StudyCreation}></Route>
        <Route exact path={Path.스터디_상세} component={StudyDetail}></Route>
        <Route exact path={Path.맴버_목록} component={FindMember}></Route>
        <Route exact path={Path.맴버_상세} component={MemberDetail}></Route>
        <Route exact path={Path.로그인} component={Login}></Route>
        <Route
          exact
          path={Path.비밀번호_재설정}
          component={ResetPassword}
        ></Route>
        <Route exact path={Path.이메일_인증} component={EmailAuth}></Route>
        <Route exact path={Path.회원가입} component={SigninReady}></Route>
        <Route
          exact
          path={Path.회원가입_이메일_인증}
          component={SignupWithEmail}
        ></Route>
        <Route path="/mypage" component={MyPage}></Route>
        <Route exact path="/test/component" component={Component}></Route>
        <Route exact path="/test/modal" component={Modal}></Route>
        <Route exact path="/test/functional" component={Functional}></Route>
        <Route exact path="/siteMap" component={SiteMap}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
