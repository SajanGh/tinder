import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LinearProgress } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div className="container flex">
      <Sidebar />
      <Rightbar />
      <Suspense fallback={<LinearProgress/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
