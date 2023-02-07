import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/Rootlayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
