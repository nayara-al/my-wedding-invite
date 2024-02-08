import { HTMLAttributes } from "react";

interface IBasePage extends HTMLAttributes<HTMLDivElement> {}
export const StructurePage = ({ ...props }: IBasePage) => {
  return (
    <div className="flex flex-col bg-bgPage w-full min-h-screen font-poppins font-normal">
      {props.children}
    </div>
  );
};
