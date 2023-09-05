"use client";
import { gsap } from "gsap";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NV1 from "../../../../../public/nv1.jpeg"

export default function CardHome() {
  const onEnter = ({ currentTarget }: React.MouseEvent): void => {
    gsap.to(currentTarget, { scale: 1.2, margin: 24, cursor: "pointer" });
  };

  const onLeave = ({ currentTarget }: React.MouseEvent) => {
    gsap.to(currentTarget, { scale: 1, margin: 0, cursor: "arrow" });
  };
  return (
    <>
      <Link
        href={"/nossa-historia"}
        className="h-fit bg-white p-4 flex flex-col rounded-lg gap-4 text-center items-center"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Image
          src={NV1}
          alt="uma das primeiras fotos do casal"
          height={360}
          className="rounded-lg"
        />
        <p className="font-gwendolyn text-[44px] text-black">Nossa História</p>
      </Link>
      <div
        className="h-fit bg-white p-4 flex flex-col rounded-lg gap-4 text-center items-center"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Image
          src={NV1}
          alt="uma das primeiras fotos do casal"
          height={360}
          className="rounded-lg"
        />
        <p className="font-gwendolyn text-[44px]  text-black">Nossa História</p>
      </div>
      <div
        className="h-fit bg-white p-4 flex flex-col rounded-lg gap-4 text-center items-center"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Image
          src={NV1}
          alt="uma das primeiras fotos do casal"
          height={360}
          className="rounded-lg"
        />
        <p className="font-gwendolyn text-[44px]  text-black">Nossa História</p>
      </div>
    </>
  );
}
