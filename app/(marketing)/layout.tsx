import { ReactNode } from "react";
import { Navbar } from "./_components/nav-bar";
import { MainFooter } from "./_components/main-footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MarketingLayout;
