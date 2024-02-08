import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SectionMarquee() {
  return (
    <div className="py-12 h-full bg-white w-full flex items-center justify-center">
      <Marquee
        autoFill
        pauseOnHover
        pauseOnClick
        gradient
        gradientColor="#BDAFAA"
        gradientWidth="120"
        className="max-w-[1280px] w-[90%]"
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            width={400}
            height={400}
            src={"/images/1.jpg"}
            alt=""
            className="mx-8 rounded-xl"
          />
          <p className="text-xs text-slate-400">
            <a target="_blank" href="https://br.freepik.com/fotos-gratis/gente-alegria-momento-agradavel-na-vida-mulher-jovem-europeia-morena-de-alegria-em-pe-perto-de-seu-namorado-vai-cobrir-os-olhos-e-fazer-surpresa-se-divertir-juntos-isolados-sobre-uma-parede-branca_10421304.htm#page=3&position=23&from_view=author&uuid=334cc443-039f-48f7-91e4-6edb31124f30">
              Imagem de wayhomestudio
            </a>{" "}
            no Freepik
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            width={400}
            height={400}
            src={"/images/2.jpg"}
            alt=""
            className="mx-8 rounded-xl"
          />
          <p className="text-xs text-slate-400">
            <a target="_blank" href="https://br.freepik.com/fotos-gratis/foto-horizontal-de-amigos-felizes-apontando-o-dedo-para-voce-gesticule-para-dentro-faca-uma-escolha-tenha-expressoes-positivas_10749544.htm#page=2&position=20&from_view=author&uuid=334cc443-039f-48f7-91e4-6edb31124f30">
              Imagem de wayhomestudio
            </a>{" "}
            no Freepik
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            width={400}
            height={400}
            src={"/images/3.jpg"}
            alt=""
            className="mx-8 rounded-xl"
          />
          <p className="text-xs text-slate-400">
            <a target="_blank" href="https://br.freepik.com/fotos-gratis/casal-adoravel-tem-um-abraco-caloroso_13759431.htm#query=casal&position=0&from_view=search&track=sph&uuid=cb4c7165-b088-46ff-9393-1d7abcce3fe8">
              Imagem de wayhomestudio
            </a>{" "}
            no Freepik
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            width={400}
            height={400}
            src={"/images/4.jpg"}
            alt=""
            className="mx-8 rounded-xl"
          />
          <p className="text-xs text-slate-400">
            Imagem de{" "}
            <a target="_blank" href="https://br.freepik.com/fotos-gratis/pares-bonitos-que-passam-tempo-juntos_66194829.htm#query=casal&position=2&from_view=search&track=sph&uuid=cb4c7165-b088-46ff-9393-1d7abcce3fe8">
              Freepik
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            width={400}
            height={400}
            src={"/images/5.JPG"}
            alt=""
            className="mx-8 rounded-xl"
          />
          <p className="text-xs text-slate-400">
            Imagem de{" "}
            <a target="_blank" href="https://br.freepik.com/fotos-gratis/vista-traseira-casal-sentado-na-natureza_72566482.htm#query=casal&position=40&from_view=search&track=sph&uuid=cb4c7165-b088-46ff-9393-1d7abcce3fe8">
              Freepik
            </a>
          </p>
        </div>
      </Marquee>
    </div>
  );
}
