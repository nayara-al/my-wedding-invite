import { NavBar } from "@/components/common/NavBar";
import { PageTitle } from "@/components/common/PageTitle";
import { Scrap } from "@/components/common/Scrap";
import { StructurePage } from "@/components/common/StructurePage";

import React from "react";

export default function pages() {
  return (
    <div className="grow">
      <PageTitle title="Nossa história" />
      <div className="flex self-center justify-center ">
        <Scrap />
      </div>
    </div>
  );
}
