import React from "react";
interface IBasePage {
    children: React.ReactNode
}
export const StructurePage = ({ children }: IBasePage) => {
  return <div className="min-h-[100vh] flex flex-col bg-bgPage h-full w-full">{children}</div>;
};
