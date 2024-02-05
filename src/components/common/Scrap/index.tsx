import Image from "next/image";
import SectionMarquee from "../Marquee";

export const Scrap = () => {
  const cssParagraph =
    "bg-amber-200 w-full max-w-[460px] max-md:w-[90%] p-4 shadow-md border border-gray-300 rounded-lg";
  return (
    <div className="mb-[80px] gap-16 flex flex-col text-center mt-12 w-full text-black min-h-[160px] items-center justify-center">
      <p className={`${cssParagraph}`}>
        Era uma tarde de sábado, em um evento de jovens da igreja, onde destinos
        se entrelaçaram e uma história de amor começou a se desenhar. Em uma
        tarde de vôlei, Nayara e Victor conversaram pela primeira vez. A paixão
        pelos esportes e a alegria de estarem na presença de amigos em comum
        criaram uma conexão especial entre eles. Conforme conversavam e se
        conheciam, descobriram vários gostos em comum, o que solidificou essa
        amizade inicial em algo mais profundo. À medida que compartilhavam
        risadas em conversas de filmes e desfrutavam de momentos juntos em
        alguns jogos eletrônicos, Nayara e Victor perceberam que a amizade que
        começou na igreja estava se transformando em algo mais significativo.
      </p>
      <SectionMarquee />
      <p className={`${cssParagraph}`}>
        A cumplicidade crescia, e o interesse romântico florescia lentamente,
        como um jardim cuidadosamente cultivado. Movidos pela fé que
        compartilhavam e pelo desejo de construir uma vida juntos, Nayara e
        Victor iniciaram um período de oração e discernimento. Foram cinco anos
        de namoro até que Deus abriu portas de oportunidade para ambos no campo
        profissional, sinalizando que era o momento de dar o próximo passo em
        sua jornada juntos. Com gratidão nos corações, Nayara e Victor decidiram
        trilhar o caminho do matrimônio. A celebração do casamento não é apenas
        o início de uma nova fase, mas a continuação de uma história de amor que
        começou na igreja, foi moldada por interesses compartilhados e
        fortalecida pela fé em Deus.
      </p>
    </div>
  );
};
