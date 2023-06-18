import AdminRoot from "../pages/Admin/AdminRoot";
import Accessories from "../pages/User/Accessories";
import Contact from "../pages/User/Contact";
import DetailPage from "../pages/User/DetailPage";
import Games from "../pages/User/Games";
import Hardware from "../pages/User/Hardware";
import Login from "../pages/User/Login";
import AdminHome from "../pages/Admin/AdminHome";
import UserHome from "../pages/User/UserHome";
import LoginRoot from "../pages/User/LoginRoot";
import MainRoot from "../pages/User/MainRoot";
import Register from "../pages/User/Register";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: 'home',
                element: <UserHome/>
            },
            {
                path: 'accessories',
                element: <Accessories />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: '',
                element: <DetailPage />
            },
            {
                path: 'games',
                element: <Games />
            },
            {
                path: 'hardware',
                element: <Hardware />
            },
        ]
    },
    {
        path: "/",
        element: <LoginRoot />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/",
        element: <AdminRoot/>,
        children: [
            {
                path: "adminpanel",
                element: <AdminHome/>
            }
        ]
    }

]