"use client";
import React, { useEffect, useState } from "react";
import { House, PencilLine, CalendarCheck } from "@phosphor-icons/react";
import rings from "../../../../public/rings.png";
import Image from "next/image";
import Link from "next/link";


export const NavBar = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="max-w-[100vw] bg-primary max-md:fixed max-md:bottom-0 mb-4 max-md:mb-0 z-10 max-md:w-[100vw]">
      <ul className="flex justify-around text-[20px] text-white">
        <Link href={"/"} className="text-center">
          <li className="flex gap-6 py-2">
            {showText ? (
              <p className="font-poppins self-center">Home</p>
            ) : (
              <House width={44} height={44} weight="light" />
            )}
          </li>
        </Link>
        <Link href={"/nossa-historia"}>
          <li className="flex gap-6 py-2">
            {showText ? (
              <p className="font-poppins self-center">Nossa história</p>
            ) : (
              <PencilLine width={44} height={44} weight="light" />
            )}
          </li>
        </Link>
        <Link href={"/vamos-casar"}>
          <li className="flex gap-6 py-2">
            {showText ? (
              <p className="font-poppins self-center">Vamos casar</p>
            ) : (
              <Image src={rings} alt="alianças de casamento" />
            )}
          </li>
        </Link>
        <Link href={"/salvar-data"}>
          <li className="flex w-full gap-6 py-2">
            {showText ? (
              <p className="font-poppins self-center">Salvar a data?</p>
            ) : (
              <CalendarCheck width={44} height={44} weight="light" />
            )}
          </li>
        </Link>
      </ul>
    </section>
  );
};
