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

export enum TextInputStatus {
    기본값 = "D",
    성공 = "S",
    오류 = "E"
}

export enum ButtonStatus {
    기본 = "P",
    서브 = "S"
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