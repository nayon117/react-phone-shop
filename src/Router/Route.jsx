import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>
    }
])

export default myCreateRoute;