import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Template from "../Template";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import OrderHistory from "../pages/OrderHistory";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        // Mengisi outlet
        children: [
            { path: "/", element: <App /> },
            { path: "/profile", element: <Profile /> },
            { path: "/orderhistory", element: <OrderHistory /> },
            { path: "/editprofile", element: <EditProfile /> },
        ]
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
])