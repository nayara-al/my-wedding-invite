'use client'
import { useState } from "react";
import { InputText } from "../InputText";
import axios from "axios";

const GuestConfirm = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const requestData = {
        firstName: nome,
        email: email,
        message: message,
      };
      console.log('antes da api')
      const response = await axios.post('/api/confirm', requestData)
      console.log('saída da api')

      if (response.status === 200) {
        alert('Confirmação enviada!')
      } else {
        console.error("Erro ao confirmar presença");
      }
    } catch (error) {
      console.error("Erro ao confirmar presença", error);
    }
  }

  return (
    <div className="w-full items-center justify-center">
      <form onSubmit={handleSubmit}>
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
        />

        <button type="submit" className="bg-primary p-2 rounded-sm">
          Confirmar presença
        </button>
      </form>
    </div>
  );
};
export default GuestConfirm;
