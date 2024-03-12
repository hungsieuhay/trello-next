import { ReactNode } from "react";
import { Navbar } from "./_components/nav-bar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
