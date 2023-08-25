"use client";
import React, { useEffect, useState } from "react";
import { List, House, PencilLine, CalendarCheck } from "@phosphor-icons/react"
import rings from "../../../../public/rings.png";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 864) {
        setChangeMenu(true);
      } else {
        setChangeMenu(false);
        setShowText(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [changeMenu, setChangeMenu] = useState(true);
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    if (changeMenu) setShowText((prevShowText) => !prevShowText);
    else setShowText(false);
  };
  const width = showText ? "75" : "30";

  return (
    <section className={`w-${width} h-[100vh] bg-primary `}>
      <header
        onClick={toggleText}
        className="bg-secondGreen flex items-center gap-12 px-4 h-12"
      >
        <List width={32} height={32} className="cursor-pointer"/>
        {showText && (
          <p className="hover:cursor-pointer font-gwendolyn text-[2rem]">
            Menu
          </p>
        )}
      </header>
      <ul className="flex flex-col gap-4 px-2">
        <Link href={"/"} className="text-center">
          <li className="flex gap-6 py-2">
            <House width={44} height={44} weight="light" />
            {showText && <p className="font-poppins self-center">Home</p>}
          </li>
        </Link>
        <Link href={"/nossa-historia"}>
          <li className="flex gap-6 py-2">
            <PencilLine width={44} height={44} weight="light"/>
            {showText && (
              <p className="font-poppins self-center">Nossa história</p>
            )}
          </li>
        </Link>
        <Link href={"/vamos-casar"}>
          <li className="flex gap-6 py-2">
            <Image src={rings} alt="alianças de casamento" />
            {showText && (
              <p className="font-poppins self-center">Vamos casar</p>
            )}
          </li>
        </Link>
        <Link href={"/salvar-data"}>
          <li className="flex w-full gap-6 py-2">
            <CalendarCheck width={44} height={44} weight="light"/> 
            {showText && (
              <p className="font-poppins self-center">Salvar a data?</p>
            )}
          </li>
        </Link>
      </ul>
    </section>
  );
};
