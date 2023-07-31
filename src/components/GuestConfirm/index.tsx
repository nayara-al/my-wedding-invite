"use client";
import { useState } from "react";
import { InputText } from "../InputText";

const GuestConfirm = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  /* async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    await fetch("/api/thanks-confirm", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    });
  } */

  return (
    <div className="w-full items-center justify-center">
      <form /* onSubmit={handleSubmit} */>
        <InputText
          id="nome"
          label="Nome"
          placeholder="nome do convidado"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputText
          id="email"
          label="E-mail para confirmação"
          placeholder="seuemail@mail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Confirmar presença</button>
      </form>
    </div>
  );
};
export default GuestConfirm;
