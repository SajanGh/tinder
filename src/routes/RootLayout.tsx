import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LinearProgress } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div>
      <div className="container flex">
        <Sidebar />
        <Rightbar />
      </div>
      <Suspense fallback={<LinearProgress />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default RootLayout;
