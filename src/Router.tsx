import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/FindStudy/FindMain";
import FindMember from "./pages/FindStudy/FindMember";
import FindStudy from "./pages/FindStudy/FindStudy";
import Login from "./pages/Users/Login";
import EmailAuth from "pages/Users/EmailAuth";
import SigninReady from "./pages/Users/SignupReady";
import ResetPassword from "pages/Users/ResetPassword";
import SignupWithEmail from "./pages/Users/Signup";
import StudyCreation from "./pages/study/Creation";
import StudyDetail from "pages/study/Detail";
import MemberDetail from "pages/member/Detail";
import Component from "pages/test/Component";
import Modal from "pages/test/ModalComponent";
import Functional from "pages/test/Functional";
import SiteMap from "pages/SiteMap";
import MyPage from "pages/mypage/MyPage";

import { Path } from "utils/enum";
import FindPassword from 'pages/Users/FindPassword';

function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path={Path.메인} component={FindStudy}></Route>
        <Route exact path={Path.스터디_목록} component={FindStudy}></Route>
        <Route exact path={Path.스터디_생성} component={StudyCreation}></Route>
        <Route exact path={Path.스터디_수정} component={StudyCreation}></Route>
        <Route exact path={Path.스터디_상세} component={StudyDetail}></Route>
        <Route exact path={Path.맴버_목록} component={FindMember}></Route>
        <Route exact path={Path.맴버_상세} component={MemberDetail}></Route>
        <Route exact path={Path.로그인} component={Login}></Route>
        <Route exact path={Path.비밀번호_재설정} component={ResetPassword}></Route>
        <Route exact path={Path.이메일_인증} component={EmailAuth}></Route>
        <Route exact path={Path.회원가입} component={SigninReady}></Route>
        <Route exact path={Path.회원가입_이메일_인증} component={SignupWithEmail}></Route>
        <Route exact path={Path.비밀번호_찾기} component={FindPassword}></Route>
        <Route path="/mypage" component={MyPage}></Route>
        <Route exact path="/test/component" component={Component}></Route>
        <Route exact path="/test/modal" component={Modal}></Route>
        <Route exact path="/test/functional" component={Functional}></Route>
        <Route exact path="/siteMap" component={SiteMap}></Route>
        <Route render={() => <Redirect to={Path.메인} />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
