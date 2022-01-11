import FindMember from "pages/FindStudy/FindMember";
import MemberDetail from "pages/member/Detail";

const MemberRoutes = [
    {
        path: '/member/findMember',
        component: FindMember,
    },
    {
        path: '/member/detail',
        component: MemberDetail
    }
]

export default MemberRoutes;