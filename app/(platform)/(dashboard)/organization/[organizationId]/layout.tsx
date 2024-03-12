import { ReactNode } from "react";
import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <OrgControl />
      {children}
    </main>
  );
};

export default OrganizationIdLayout;
