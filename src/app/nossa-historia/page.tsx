import { NavBar } from "@/components/NavBar";
import { PageTitle } from "@/components/PageTitle";
import { Scrap } from "@/components/Scrap";
import React from "react";

export default function pages() {
  return (
    <div className="flex bg-bgPage h-full w-full">
      <NavBar />
      <div>
        <PageTitle title="Nossa história"/>
        <div className="flex self-center justify-center ">
          <Scrap/>
        </div>
      </div>
    </div>
  );
}
