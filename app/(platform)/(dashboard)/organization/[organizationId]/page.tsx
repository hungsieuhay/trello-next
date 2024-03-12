import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { orgId, userId } = auth();
  return <div>Organization page</div>;
};

export default OrganizationIdPage;
