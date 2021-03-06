import { ProcessType } from "./enum";
import { Entry } from "./interface";

export const STUDY_EDIT_CONSTANT: {
    소개글_PLACEHOLDER: string;
    소개글_최대_글자수: number;
    진행방식_목록: Entry<ProcessType>[];
    활동지역_목록: string[];
    기간_목록: string[];
    주중_주말_목록: string[];
    협업_툴_목록: string[];
} = {
    소개글_PLACEHOLDER: `예시 ) 
- 스터디 목적 : 포트폴리오용 프로젝트 
- 스터디 주제 : 이커머스 서비스 개발 
- 스터디 목표 : AWS 배포 - 현 진행 상황 : 기획 진행 중 
- 본인 포지션 설명 : 백엔드 개발자, spring 사용 
- 기타: 현업 실무자, 취준생 누구든 환영입니다!`,
    소개글_최대_글자수: 200,
    진행방식_목록: [
        { name: '온라인', value: ProcessType.온라인 }, 
        { name: '오프라인', value: ProcessType.오프라인 }, 
        { name: '온/오프라인 병행', value: ProcessType.온오프라인 }
    ],
    활동지역_목록: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    기간_목록: ['일주일', '한 달', '두 달', '세 달', '네 달', '다섯 달 이상'],
    주중_주말_목록: ['주말', '주중', '주말과 주중', '협의한 요일'],
    협업_툴_목록: ['Asana', 'JANDI', 'Google Meet', 'Trello', 'Notion', 'Zoom', 'Slack', 'collabee', 'GitHub', 'Microsoft Teams', 'Dropbox Paper', 'Jira', 'NAVER WORKERS', 'Quip']
}