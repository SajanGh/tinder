import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./routes/RootLayout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import { CssBaseline } from "@mui/material";
import Signup from "./pages/Signup";
import EmailVerification from "./pages/EmailVerification";
import Recommendation from "./pages/Recommendation";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "*",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "verifyEmail",
        element: <EmailVerification />,
        children: [
          {
            path: ":verificationCode",
            element: <EmailVerification />,
          },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/app",
        children: [
          {
            path: "",
            element: <Recommendation />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

/*  */

const App = () => {
  return (
    <div className="p-0 m-0">
      <React.StrictMode>
        <CssBaseline />
        <Toaster expand visibleToasts={9} />

        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
