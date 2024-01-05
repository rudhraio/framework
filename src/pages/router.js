import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Home from "./home/home.jsx";
import AuthGuard from "../utils/helpers/auth-guard.js";

const router = createBrowserRouter([
    {
        path: "/",
        loader() { return AuthGuard(false) },
        Component: Home,
    },
    {
        path: "/dashboard",
        loader() { return AuthGuard() },
        element: "In Dashboard",
    },

    // always has to be at end
    {
        path: "*",
        Component: ErrorPage
    }
]);

export default router;