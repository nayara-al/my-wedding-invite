import { HTMLAttributes } from "react";

interface IBasePage extends HTMLAttributes<HTMLDivElement> {}
export const StructurePage = ({ ...props }: IBasePage) => {
  return (
    <div className="flex flex-col bg-bgPage w-full">
      {props.children}
    </div>
  );
};
