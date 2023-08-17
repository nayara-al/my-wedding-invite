'use client'
import { useState, FormEvent } from "react";
import { ControlButtons } from "./ControlButtons";
import { Directional } from "./Direcional";

export const GameBoy = () => {
  const [confirmValue, setConfirmValue] = useState("sim");

  function formConfirm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (confirmValue === "sim") console.log("presença confirmada");
    else console.log("presença não confirmada")
  }

  function handleConfirmChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setConfirmValue(event.target.value);
  }

  return (
    <form
      onSubmit={formConfirm}
      className="bg-grayBase p-6 border-solid border-2 border-darkGray rounded-t-lg rounded-bl-lg rounded-br-[60px]"
    >
      <div className="bg-darkGray px-6 py-8 mb-5 rounded-md">
        <p className="text-white pb-4 font-pressStart2P">
          {" "}
          Casamento - Nayara e Victor
        </p>
        <fieldset>
          <legend>Save</legend>
          <div>
            <input
              type="radio"
              id="sim"
              name="confirm"
              value="sim"
              checked={confirmValue === "sim"}
              onChange={handleConfirmChange}
            />
            <label htmlFor="sim">Sim</label>
          </div>
          <div>
            <input
              type="radio"
              id="nao"
              name="confirm"
              value="nao"
              checked={confirmValue === "nao"}
              onChange={handleConfirmChange}
            />
            <label htmlFor="nao">Não</label>
          </div>
        </fieldset>
      </div>
      <div className="flex justify-around items-center py-10">
        <Directional />
        <ControlButtons />
      </div>
    </form>
  );
};
