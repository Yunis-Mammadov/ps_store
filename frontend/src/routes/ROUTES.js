import AdminHome from "../pages/Admin/AdminHome";
import AdminRoot from "../pages/Admin/AdminRoot";
import Accessories from "../pages/User/Accessories";
import BasketPage from "../pages/User/BasketPage";
import DetailPage from "../pages/User/DetailPage";
import FreeToPlay from "../pages/User/FreeToPlay";
import Games from "../pages/User/Games";
import Hardware from "../pages/User/Hardware";
import Login from "../pages/User/Login";
import LoginRoot from "../pages/User/LoginRoot";
import MainRoot from "../pages/User/MainRoot";
import NewGames from "../pages/User/NewGames";
import Register from "../pages/User/Register";
import UserHome from "../pages/User/UserHome";


export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <UserHome/>
            },
            {
                path: 'accessories',
                element: <Accessories />
            },
            {
                path: '/games/:id',
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
            {
                path: 'newgames',
                element: <NewGames />
            },
            {    path: 'freetoplay',
                element: <FreeToPlay />
            },
            {
                path: 'basket',
                element: <BasketPage/>
            }
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
            },
            // {
            //     path: "adminuser",
            //     element: </>
            // }
        ]
    }

]