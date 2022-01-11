import Login from "pages/Users/Login";
import EmailAuth from "pages/Users/EmailAuth";
import SigninReady from "pages/Users/SigninReady";
import ResetPassword from "pages/Users/ResetPassword";
import EmailSignin from "pages/Users/Signin";
import FindPassword from "pages/Users/FindPassword";

const usersRoutes = [
    {
        path: '/users/login',
        component: Login,
    },
    {
        path: '/users/emailAuth',
        component: EmailAuth,
    },
    {
        path: '/users/signinReady',
        component: SigninReady,
    },
    {
        path: '/users/resetPassword',
        component: ResetPassword,
    },
    {
        path: '/users/emailSignin',
        component: EmailSignin,
    },
    {
        path: '/users/findPassword',
        component: FindPassword,
    }
]

export default usersRoutes;
