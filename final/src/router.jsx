import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayouth from "./Layouth/main/MainLayouth";
import Home from "./Layouth/main/pages/Home";
import Shop from "./Layouth/main/pages/Shop";
import About from "./Layouth/main/pages/About";
import Contact from "./Layouth/main/pages/Contact";
import Wishlist from "./Layouth/main/pages/Wishlist";
import Detail from "./Layouth/main/pages/Detail";
import Mycart from "./Layouth/main/pages/Mycart";
import Accaunt from "./Layouth/main/pages/Accaunt";
import AuthLayouth from "./Layouth/auth/AuthLayouth";
import Login from "./Layouth/auth/pages/Login";
import Register from "./Layouth/auth/pages/Register";
const router = createBrowserRouter([
    {
            path: "/",
            element: <MainLayouth />,
            children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
            },
            {
                path: "home/:id",
                element: <Detail/>,
            },
            {
                path: "shop",
                element: <Shop/>,
            },
            {
                path: "accaunt",
                element: <Accaunt/>,
            },
            {
                path: "mycart",
                element: <Mycart/>,
            },
           
        ],
    },
    {
    path: "auth",
    element: <AuthLayouth/>,
    children: [
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        }
    ]
    }
]);

export const MainRouterDom = () => {
    return <RouterProvider router={router} />
}