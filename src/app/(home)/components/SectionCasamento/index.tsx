import Image from "next/image";

export default function SectionCasamento() {
  return (
    <div className="flex flex-col justify-center items-center mb-[80px] text-white">
      <div className="p-4 text-center w-[600px] max-md:w-4/5 max-w-[600px] flex flex-col gap-8 mt-4">
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-center gap-8 text-center">
            <Image src="/rings.png" alt="" width={40} height={40} />
            <h2 className="font-gwendolyn text-5xl">Cerimônia</h2>
          </div>
          <div className="flex justify-between text-2xl font-poppins">
            <p>
              <strong>Data:</strong> 01/12/2024
            </p>
            <p>
              <strong>Local:</strong>Salão de Festas
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-[500] text-xl">Sobre o Casal</h2>
          <p className="text-justify">
            Os noivos estão felizes em compartilhar esse momento especial com
            seus amigos e familiares. Eles se conheceram no dia 01/01/2020 e
            desde então compartilham uma linda jornada juntos.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-[500] text-xl">Festa de Casamento</h2>
          <p className="text-justify">
            A festa de casamento será uma celebração inesquecível com música,
            dança e muita diversão. Todos estão convidados a se juntar ao casal
            para comemorar esse dia especial.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-[500] text-xl">RSVP</h2>
          <p className="text-justify">
            Por favor, confirme sua presença até <strong>15/10/2024</strong>{" "}
            para que possamos fazer os preparativos necessários. Esperamos
            ansiosamente vê-lo no nosso casamento!
          </p>
        </section>
      </div>
    </div>
  );
}
