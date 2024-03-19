import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Toaster } from "sonner";

const FlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default FlatformLayout;
