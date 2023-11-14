"use client";
import Toggle from "@/components/common/Toggle";
import FormSave from "@/components/pageComponents/salvar-data/FormSave";
import { GameBoy } from "@/components/pageComponents/salvar-data/GameBoy";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

export default function SaveTheDate() {
  const [formConfirm, setFormConfirm] = useState<boolean>(true);
  let idElement = formConfirm ? "#formAnimated" : "#formJoystick";

  const toggleElement = () => {
    setFormConfirm(!formConfirm);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    if (idElement == "#formAnimated") {
      tl.from(idElement, {
        opacity: 0,
        duration: 0.5,
        x: -100
      }).to(idElement, {
        opacity: 1,
        duration: 0.5,
        x: 0
      });
    } else {
      tl.from(idElement, {
        opacity: 0,
        duration: 0.5,
        x: 100
      }).to(idElement, {
        opacity: 1,
        duration: 0.5,
        x: 0
      });
    }
  }, [formConfirm, idElement]);

  return (
    <div className="flex flex-col items-center gap-10 my-4">
      <Toggle
        value={formConfirm ? "Confirmação formal" : "Confirmação por joystick"}
        onChange={toggleElement}
      >
        {formConfirm ? "Confirmação formal" : "Confirmação por joystick"}
      </Toggle>
      <div className="flex flex-1 flex-col bg-bgPage h-[100vh] gap-6 text-center justify-center items-center">
        {formConfirm ? <FormSave /> : <GameBoy />}
      </div>
    </div>
  );
}
