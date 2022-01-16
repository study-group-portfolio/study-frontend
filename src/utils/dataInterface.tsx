import { 
    ProcessType, 
    RecruitType, 
    StudyType 
} from "utils/enum";

export interface MainPageResponse {
     studyCardList: StudyCard[]; // 최대 12개
     memberCardList: MemberCard[];
}

export interface StudyListPageResponse {
    studyCardList: StudyCard[];
}

export interface MemberListPageResponse {
    memberCardList: MemberCard[];
}

export interface StudyCreationPageRequest {
    title: string;
    publicProfile: boolean;
    introduction: string;
    processType: ProcessType;
    location: Location;
    expectDuration: ExpectDuration;
    recruitmentPositionList?: RecruitmentPosition[];
    interestingSkill?: InterestingSkill;
    recruitmentPeriod: RecruitmentPeriod;
    collaborationToolList: CollaborationTool[];
}

export interface StudyDetailPageResponse {
    title: string;
    profile: Profile;
    introduction: string;
    processType: ProcessType;
    location: Location;
    expectDuration: ExpectDuration;
    recruitmentPositionList?: RecruitmentPosition[];
    interestingSkill?: InterestingSkill;
    recruitmentPeriod: RecruitmentPeriod;
    collaborationToolList: CollaborationTool[];
    viewCount: number;
    participantList: Participant[];
    bookMark: boolean;
}

export interface ProfileSidebar {
    nickname: string;
    img: string;
    email: string;
}

export interface ProfileDetailPageResponse {
    publicProfile: boolean;
    introduction: string;
    processType: ProcessType;
    locationList: Location[];
    position: Position[];
    portfolioList: Portfolio[];
}

export interface ProfileRevisionPageRequest {
    seq: number;
    publicProfile: boolean;
    introduction: string;
    processType: ProcessType;
    location: Location;
    positionList: SearchPosition[];
    portfolioList: Portfolio[];
}

export interface ProfileRevisionPageResponse {
    seq: number;
    publicProfile: boolean;
    introduction: string;
    processType: ProcessType;
    location: Location;
    positionList: SearchPosition[];
    portfolioList: Portfolio[];
}

export interface MemberModificationPageRequest {
    seq: number;
    nickname: string;
    img: string;
    email: string;
}

export interface MemberModificationPageResponse {
    seq: number;
    nickname: string;
    img: string;
    email: string;
}

export interface StudyBookMarkPageResponse {
    studyCardList: StudyCard[];
}

export interface MemberBookMarkPageResponse {
    memberCardList: MemberCard[];
}

export interface StudyActivityPageResponse {
    studyCardList: StudyCard[];
}

export interface PasswordResetting {
    currentPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
}

export interface SearchModalRequest {
    studyType: StudyType;
    processType: ProcessType;
    locationList: Location[];
}

export interface StudySearchModalRequest extends SearchModalRequest {
    StudyPositionList: SearchPosition[];
}

export interface MemberSearchModalRequest extends SearchModalRequest {
    memberPosition: SearchPosition;
}

export interface ParticipantListModalResponse {
    participantList: Participant[];
}

export interface ApplyModalRequest {
    introduction: string;
}

export interface ConnectModalRequest {
    introduction: string;
    studyList: Study[];
    positionList: Position[]
}

export interface StudyCard {
    seq: number;
    name: string;
    bookMark: boolean;
    recruitType: RecruitType;
    studyType: StudyType;
    processType: ProcessType;
    skillTagList: SkillTag[];
}

export interface MemberCard {
    seq: number;
    name: string;
    bookMark: boolean;
    positionName: string;
    skillTagList: SkillTag[];
}

export interface SkillTag {
    name: string;
}

export interface SearchPosition {
    name: string;
    skillTagList: SkillTag[];
}

export interface Location {
    name: string;
}

export interface ExpectDuration {
    duration: DurationType;
    frequency: FrequencyType;
}

export interface RecruitmentPeriod {
    startDate: Date;
    endDate: Date;
}

export interface CollaborationTool {
    name: string;
}

export interface RecruitmentPosition {
    name: string;
    skillTagList: SkillTag[];
    recruitmentCount: number;
    currentCount: number;
}

export interface Profile {
    name: string;
    img?: string;
    introduction: string;
    skillTagList: SkillTag[];
}

export interface InterestingSkill {
    skillTagList: SkillTag[];
    recruitmentCount: number;
    currentCount: number;
}

export interface Participant {
    name: string;
    img?: string;
    position: string;
}

export interface Study {
    name: string;
}

export interface Position {
    name: string;
}

export interface Portfolio {
    name: string;
    url: string;
}

export enum DurationType {
    일주일 = 'aWeek',
    한달 = 'aMonth',
    두달 = 'twoMonth',
    세달 = 'threeMonth',
    네달 = 'fourMonth',
    다섯달이상 = 'fiveMoreMonth'
}

export enum FrequencyType {
    주말 = 'weekend',
    주중 = 'weekdays',
    주말과주중 = 'all',
    협의한요일 = 'select'
}