import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { PersonsPage } from "./persons";

const router = createBrowserRouter([
  {
    path: "/persons",
    element: null,
    children: [
      {
        path: "/persons",
        index: true,
        element: <PersonsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/persons"} />,
  },
]);

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
