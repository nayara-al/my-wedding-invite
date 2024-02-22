"use client";
import { useState } from "react";
import { InputText } from "../InputText";
import axios from "axios";
import { useToastfy } from "@/hooks/useToastfy";

const GuestConfirm = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [qtdPessoas, setQtdPessoas] = useState<string>("1");
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const showToast = useToastfy();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisable(true);
    const requestData = {
      fullName: nome,
      email: email,
      message: message,
      numberGuests: qtdPessoas
    };
    try {
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
      setEmail("");
      setMessage("");
      setNome("");
      setIsDisable(false);
    } catch (error) {
      console.error("Erro ao confirmar presença", error);
      showToast({
        text: "Algo deu errado :(",
        type: "error",
      });
    }
  }

  let cssButton = isDisable
    ? "bg-slate-300 text-black opacity-30"
    : "bg-slate-700 text-white";

  return (
    <div className="max-md:mb-20 mt-12 h-full flex justify-center items-center flex-col gap-12 max-w-xl w-full">
      <h1 className="max-sm:w-4/5 text-xl max-w-md text-center text-slate-900 font-bold">
        Obrigada por querer estar conosco no nosso grande dia
      </h1>
      <form
        className="w-full p-12 max-cp:p-8 gap-4 flex flex-col items-center justify-center mb-12 border border-solid bg-primary rounded-lg shadow-lg bg-center"
        onSubmit={handleSubmit}
      >
        <h1 className="font-gwendolyn text-white text-3xl">
          Confirmação de presença
        </h1>
        <InputText
          id="nome"
          label="Nome completo"
          placeholder="nome do convidado"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <InputText
          id="email"
          label="E-mail para confirmação"
          placeholder="seuemail@mail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex flex-col min-w-120 w-full mb-4 gap-2">
          <label htmlFor="qtdPessoas" className="text-white">
            Quantos acompanhantes?
          </label>
          <select
            name="qtdPessoas"
            id="qtdPessoas"
            className="rounded-md text-black py-2 px-2"
            value={qtdPessoas}
            onChange={(e) => setQtdPessoas(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="flex flex-col min-w-120 w-full">
          <label className="ml-1 mb-1 text-white" htmlFor={"message"}>
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Digite aqui seu recado"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-[16px] rounded-md text-black py-2 px-2 min-h-[120px]"
          ></textarea>
        </div>
        <button
          disabled={isDisable}
          type="submit"
          className={`${cssButton} p-2 rounded-lg w-full font-bold font-poppins`}
        >
          {isDisable ? "Aguarde..." : "Confirmar presença"}
        </button>
      </form>
    </div>
  );
};
export default GuestConfirm;
