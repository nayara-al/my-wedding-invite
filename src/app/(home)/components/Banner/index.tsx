import Image from "next/image";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
interface BannerProps extends HTMLAttributes<HTMLDivElement>{}

export default function Banner({...props}: BannerProps) {
  return (
    <div {...props} className={twMerge("w-full h-full flex flex-col items-center justify-center", props.className)}>
      <Image width={600} height={400} className="h-full w-full object-cover relative opacity-50" src="/NeVBanner.JPG" alt="Imagem do ensaio do casal" />
      <div className="absolute top-auto text-gray-600">
        <p className="font-gwendolyn text-center text-5xl font-semibold">
          Nayara e Victor
        </p>
        <p className="font-poppins text-center text-lg">01 / 12 / 2024</p>
      </div>
    </div>
  );
}
