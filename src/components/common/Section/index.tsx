import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function Section({ ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={twMerge(
        "flex gap-8 max-md:flex-col min-h-[600px]",
        props.className
      )}
    >
      {props.children}
    </section>
  );
}
