"use client";
import FormSave from "@/components/pageComponents/salvar-data/FormSave";
import { GameBoy } from "@/components/pageComponents/salvar-data/GameBoy";
import { useState } from "react";

export default function SaveTheDate() {
  const [formConfirm, setFormConfirm] = useState<boolean>(true);
  return (
    <div className="flex flex-1 bg-bgPage h-[100vh] gap-6 text-center justify-center items-center">
      { formConfirm ? <FormSave /> : <GameBoy /> }
    </div>
  );
}
