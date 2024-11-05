import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
