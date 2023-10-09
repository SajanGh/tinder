import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = () => {
  return (
    <div className="container flex">
      <Toaster expand visibleToasts={9} />

      <Sidebar />
      <Rightbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
