"use client";

import { ReactNode } from "react";

interface ListWrapperProps {
  children: ReactNode;
}

export const ListWrapper = ({ children }: ListWrapperProps) => {
  return (
    <div className="shrink-0 h-full w-[272px] select-none">{children}</div>
  );
};
