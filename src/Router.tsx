import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./routes/RootLayout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import Signup from "./pages/Signup";
import EmailVerification from "./pages/EmailVerification";
import Recommendation from "./pages/Recommendation";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/app",
        children: [
          {
            path: "recs",
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

  {
    path: "",
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
            path: ":verificationCodeId",
            element: <EmailVerification />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
