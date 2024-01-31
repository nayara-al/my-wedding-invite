export default function OurWedding() {
  return (
    <div className="flex flex-col justify-center items-center mb-[80px]">
      <div className="p-4 text-center bg-second w-[600px] max-md:w-4/5 max-w-[600px] rounded-2xl shadow-xl flex flex-col gap-4 mt-4">
        <header>
          <p>
            <strong>Data:</strong> 01/12/2024
          </p>
          <p>
            <strong>Local:</strong>Salão de Festas
          </p>
        </header>
        <section>
          <h2 className="font-[500]">Sobre o Casal</h2>
          <p>
            Os noivos estão felizes em compartilhar esse momento especial com
            seus amigos e familiares. Eles se conheceram no dia 01/01/2020 e
            desde então compartilham uma linda jornada juntos.
          </p>
        </section>
        <section>
          <h2 className="font-[500]">Festa de Casamento</h2>
          <p>
            A festa de casamento será uma celebração inesquecível com música,
            dança e muita diversão. Todos estão convidados a se juntar ao casal
            para comemorar esse dia especial.
          </p>
        </section>
        <section>
          <h2 className="font-[500]">RSVP</h2>
          <p>
            Por favor, confirme sua presença até <strong>15/10/2024</strong>{" "}
            para que possamos fazer os preparativos necessários. Esperamos
            ansiosamente vê-lo no nosso casamento!
          </p>
        </section>
      </div>
    </div>
  );
}
