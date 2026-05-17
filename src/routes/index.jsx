import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Template from "../Template";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        // Mengisi outlet
        children: [
            { path: "/", element: <App /> },
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