import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Template from "../Template";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import OrderHistory from "../pages/OrderHistory";
import EditProfile from "../pages/EditProfile";
import ProductList from "../pages/ProductList";
import DetailProduct from "../pages/DetailProduct";
import Address from "../pages/Address";
import CreateAddress from "../pages/CreateAddress";
import EditAddress from "../pages/EditAddress";

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
            { path: "/address", element: <Address /> },
            { path: "/createaddress", element: <CreateAddress /> },
            { path: "/editaddress/:id", element: <EditAddress /> },
            { path: "/productlist", element: <ProductList /> },
            { path: "/product/:id", element: <DetailProduct /> },
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