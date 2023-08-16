import React from "react";
interface IBasePage {
    children: React.ReactNode
}
export const StructurePage = ({ children }: IBasePage) => {
  return <div className="flex bg-bgPage h-full w-full">{children}</div>;
};
