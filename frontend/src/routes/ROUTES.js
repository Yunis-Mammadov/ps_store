import Accessories from "../pages/User/Accessories";
import Contact from "../pages/User/Contact";
import DetailPage from "../pages/User/DetailPage";
import Games from "../pages/User/Games";
import Hardware from "../pages/User/Hardware";
import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import LoginRoot from "../pages/User/LoginRoot";
import MainRoot from "../pages/User/MainRoot";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />
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
            }
        ]
    }
]