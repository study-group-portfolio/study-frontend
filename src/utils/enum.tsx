export enum TabMenuType {
  스터디 = "S",
  멤버 = "M",
  참여한_스터디 = "PS",
  생성한_스터디 = "CS",
}

export enum TextInputState {
  기본값 = "D",
  성공 = "S",
  오류 = "E",
}

export enum ButtonType {
  기본 = "P",
  서브 = "S",
  카카오 = "K",
  구글 = "G",
}

/** 뱃지 종류 */
export enum BadgeType {
  모집중 = "R",
  모집완료 = "C",
  사이드프로젝트 = "SP",
  지식공뮤및탐구 = "KS",
  온라인 = "ON",
  오프라인 = "OFF",
  온오프라인 = "ON/OFF",
}

/** 스터디 모집 현황 */
export enum RecruitType {
  모집중 = "R",
  모집완료 = "C",
}

/** 스터디 종류 */
export enum StudyType {
  사이드프로젝트 = "PROJECT",
  지식공유및탐구 = "SHARE",
}

/** 스터디 진행 방식 */
export enum ProcessType {
  오프라인 = "OFF",
  온라인 = "ON",
  온오프라인 = "ONOFF",
}

/** 텍스트 입력창 타입 */
export enum TextInputType {
  일반형 = "N",
  버튼형 = "B",
  아이콘형 = "I",
}

/** 입력창 타입 */
export enum InputType {
  패스워드형 = "password",
  텍스트형 = "text",
}

/** 스터디 카드 유형 */
export enum StudyCardType {
  북마크형 = "B",
  편집형 = "E",
}

export enum SelectEventType {
  일반선택박스 = "NSB",
  그룹선택박스 = "GSB",
  체크선택박스 = "CSB",
}

export enum ResultModalType {
  맴버연락 = "M",
  스터디지원 = "S",
}

export enum ResultType {
  승낙 = "P",
  거절 = "R",
}

export enum Path {
  메인 = "/",

  로그인 = "/users/login",
  비밀번호_재설정 = "/users/resetPassword/:resetToken/:email",
  이메일_인증 = "/users/emailAuth",
  회원가입 = "/users/signup",
  회원가입_이메일_인증 = "/users/signupEmail",
  비밀번호_찾기 = "/users/findPassword",

  스터디_목록 = "/study/findStudy",
  스터디_생성 = "/study/creation",
  스터디_수정 = "/study/revision",
  스터디_상세 = "/study/detail",

  맴버_목록 = "/member/findMember",
  맴버_상세 = "/member/detail",

  내_프로필 = "/mypage/profile",
  북마크_목록 = "/mypage/bookMark",
  스터디_활동 = "/mypage/studyAcitivity",
}

export enum CalendarButtonType {
  경계값 = "B",
  사잇값 = "I",
  미포함 = "-",
}

export enum CircleButtonType {
  일반형 = "N",
  이미지형 = "M",
  아이콘형 = "I",
}
