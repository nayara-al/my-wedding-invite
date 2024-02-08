import Image from "next/image";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Banner({ ...props }: BannerProps) {
  return (
    <>
      <div
        {...props}
        className={twMerge(
          "w-full h-full flex flex-col items-center justify-center",
          props.className
        )}
      >
        <Image
          width={600}
          height={400}
          className="h-full w-full object-cover relative opacity-50 blur-sm"
          src="/NeVBanner.JPG"
          alt="Imagem do ensaio do casal"
        />
        <div className="absolute top-auto text-gray-600">
          <p className="font-gwendolyn font-bold text-center text-7xl">
            Nayara e Victor
          </p>
          <p className="font-poppins font-bold text-center text-lg">01 / 12 / 2024</p>
        </div>
      </div>
      <p className="text-xs text-slate-200">
        <a href="https://br.freepik.com/fotos-gratis/casal-jovem-caminhando-em-um-parque-de-outono_12304308.htm#query=casal&position=49&from_view=search&track=sph&uuid=76399a94-0edd-4be5-9941-9c7da01bee9c">
          Imagem de senivpetro
        </a>{" "}
        no Freepik
      </p>
    </>
  );
}
