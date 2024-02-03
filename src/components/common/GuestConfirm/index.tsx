"use client";
import { useState } from "react";
import { InputText } from "../InputText";
import axios from "axios";
import { useToastfy } from "@/hooks/useToastfy";

const GuestConfirm = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const showToast = useToastfy();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const requestData = {
        firstName: nome,
        email: email,
        message: message,
      };
      const response = await axios.post("/api", requestData);

      if (response.status === 200) {
        showToast({ text: "Confirmação enviada!", type: "confirm" });
      } else {
        console.error("Erro ao confirmar presença");
        showToast({
          text: "Algo deu errado :(",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Erro ao confirmar presença", error);
      showToast({
        text: "Algo deu errado :(",
        type: "error",
      });
    }
  }

  return (
    <div className="py-4 max-md:mb-12">
      <form className="p-12 gap-4 flex flex-col items-center justify-center m-4 border border-solid bg-second rounded-lg shadow-lg bg-center" onSubmit={handleSubmit}>
        <h1 className="font-gwendolyn text-white text-3xl">Confirmação de presença</h1>
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
        <InputText
          id="mensagem"
          label="Mensagem para os noivos"
          placeholder="Digite aqui seu recado"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[120px]"
        />

        <button
          type="submit"
          className="bg-primary p-2 rounded-lg w-full text-white font-bold font-poppins"
        >
          Confirmar presença
        </button>
      </form>
    </div>
  );
};
export default GuestConfirm;
