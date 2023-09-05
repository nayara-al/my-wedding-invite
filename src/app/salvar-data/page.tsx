import { GameBoy } from "@/components/pageComponents/salvar-data/GameBoy";
import { NavBar } from "@/components/common/NavBar";
import { StructurePage } from "@/components/common/StructurePage";
import React from "react";

export default function SaveTheDate() {
  return (
    <div className="flex flex-1 bg-bgPage h-[100vh] gap-6 text-center justify-center items-center">
      <GameBoy />
    </div>
  );
}
