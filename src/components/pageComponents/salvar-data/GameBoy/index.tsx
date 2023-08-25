"use client";
import { useState, useRef, FormEvent, useEffect } from "react";
import { ControlButtons } from "./ControlButtons";
import { Directional } from "./Direcional";
import { CaretRight } from "@phosphor-icons/react";
import gsap from "gsap";

export const GameBoy = () => {
  const [confirmValue, setConfirmValue] = useState("sim");
  const caretRef = useRef(null);
  useEffect(() => {
    gsap.to(caretRef.current, {
      y: confirmValue === "sim" ? -10 : 8,
      duration: 0.3,
      ease: "back.out",
    });
  }, [confirmValue]);
  function formConfirm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (confirmValue === "sim") alert("presença confirmada");
    else alert("presença não confirmada");
  }

  function handleConfirmChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setConfirmValue(event.target.value);
  }

  function changeOptions(): void {
    setConfirmValue(confirmValue === "sim" ? "nao" : "sim");
  }

  return (
    <form
      onSubmit={formConfirm}
      className="bg-grayBase p-6 border-solid border-2 border-darkGray rounded-t-lg rounded-bl-lg rounded-br-[60px]"
    >
      <div className="bg-darkGray px-6 py-10 mb-5 rounded-md font-pressStart2P">
        <p className="text-white pb-4 text-[16px]">
          Casamento
          <br />
          Nayara e Victor
        </p>
        <fieldset>
          <legend className="text-[12px] pb-4">Save</legend>
          <div className="flex items-center justify-center gap-2">
            <CaretRight ref={caretRef} />
            <div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="sim"
                  name="confirm"
                  value="sim"
                  checked={confirmValue === "sim"}
                  onChange={handleConfirmChange}
                />
                <label htmlFor="sim" className="text-[10px]">
                  Sim
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="nao"
                  name="confirm"
                  value="nao"
                  checked={confirmValue === "nao"}
                  onChange={handleConfirmChange}
                />
                <label htmlFor="nao" className="text-[10px]">
                  Não
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex justify-around items-center py-16">
        <Directional changeOption={changeOptions}/>
        <ControlButtons />
      </div>
    </form>
  );
};
