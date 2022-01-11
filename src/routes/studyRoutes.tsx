import FindStudy from "pages/FindStudy/FindStudy";
import StudyCreation from "pages/study/Creation";
import StudyDetail from "pages/study/Detail";

const accountRoutes = [
    {
        path: '/study/findStudy',
        component: FindStudy
    },
    {
        path: '/study/studyCreation',
        component: StudyCreation 
    },
    {
        path: '/study/studyDetail',
        component: StudyDetail
    }
];

export default accountRoutes;