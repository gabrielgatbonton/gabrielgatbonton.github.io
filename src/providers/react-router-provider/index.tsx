import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import App from "../../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
