import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import App from "../../App";
import HomePage from "../../pages/home-page";
import ProjectPage from "../../pages/project-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":project",
        element: <ProjectPage />,
      },
    ],
  },
]);

export default function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
