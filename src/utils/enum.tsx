export enum Position {
    왼쪽 = "left",
    오른쪽 = "right"
}

export enum BookMarkTabMenu {
    스터디 = "S",
    멤버 = "M",
}

export enum StudyActivityTabMenu {
    참여한_스터디 = "PS",
    생성한_스터디 = "CS"
}

export enum TextInputState {
    기본값 = "D",
    성공 = "S",
    오류 = "E"
}

export enum ButtonType {
    기본 = "P",
    서브 = "S",
    카카오 = "K",
    구글 = "G"
}

/** 뱃지 종류 */
export enum BadgeType {
    모집중 = "R",
    모집완료 = "C",
    사이드프로젝트 = "SP",
    지식공뮤및탐구 = "KS",
    온라인 = "ON",
    오프라인 = "OFF",
    온오프라인 = "ON/OFF"
}

/** 스터디 모집 현황 */
export enum RecruitType {
    모집중 = "R",
    모집완료 = "C"
}

/** 스터디 종류 */
export enum StudyType {
    사이드프로젝트 = "SP",
    지식공유및탐구 = "KS"
}

/** 스터디 진행 방식 */
export enum ProcessType {
    오프라인 = "OFF",
    온라인 = "ON",
    온오프라인 = "ON/OFF"
}

/** 텍스트 입력창 타입 */
export enum TextInputType {
    일반형 = "N",
    버튼형 = "B",
    아이콘형 = "I"
}

/** 입력창 타입 */
export enum InputType {
    패스워드형 = "password",
    텍스트형 = "text"
}

/** 스터디 카드 유형 */
export enum StudyCardType {
    북마크형 = "B",
    편집형 = "E"
}

export enum SelectEventType {
    일반선택박스 = "NSB",
    그룹선택박스 = "GSB",
    체크선택박스 = "CSB"
}