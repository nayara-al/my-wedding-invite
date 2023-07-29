"use client";
import React, { useState } from "react";
import menu from "../../../public/menu.png";
import story from "../../../public/story.png";
import rings from "../../../public/rings.png";
import calendar from "../../../public/calendar.png";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText((prevShowText) => !prevShowText);
  };
  const width = showText ? "60" : "30";

  return (
    <section className={`w-${width} h-[100vh] bg-primary`}>
      <header
        onClick={toggleText}
        className="bg-secondGreen flex items-center gap-12 px-4 h-12"
      >
        <Image src={menu} alt="menu hamburguer" width={32} height={32} />
        {showText && <p>Menu</p>}
      </header>
      <ul className="flex flex-col gap-4 px-2">
        <Link href={"/nossa-historia"}>
          <li className="flex gap-6 py-2">
            <Image src={story} alt="ícone de lápis para escrita" />
            {showText && <p className="font-poppins self-center">Nossa história</p>}
          </li>
        </Link>
        <li className="flex gap-6 py-2">
          <Image src={rings} alt="alianças de casamento" />
          {showText && <p className="font-poppins self-center">Vamos casar</p>}
        </li>
        <li className="flex w-full gap-6 py-2">
          <Image src={calendar} alt="ícone de calendário" />
          {showText && <p className="font-poppins self-center">Salvar a data?</p>}
        </li>
      </ul>
    </section>
  );
};
