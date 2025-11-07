import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: HomePage
            },
            {
                path: "/project/:id",
                Component: ProjectDetailPage
            }
        ]
    },
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}
