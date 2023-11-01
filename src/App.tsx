import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./routes/RootLayout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/app",

        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="p-0 m-0">
      <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
