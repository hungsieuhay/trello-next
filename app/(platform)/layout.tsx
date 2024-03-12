import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const FlatformLayout = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default FlatformLayout;
