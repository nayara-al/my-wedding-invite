import Image from "next/image";

export const PageTitle = () => {
  return (
    <header className="md:hidden bg-primary text-[32px] flex items-center justify-evenly p-2 text-white font-gwendolyn">
      <Image src="/rings.png" alt="icon de alianças" width={40} height={40} />
      <p>My wedding app</p>
      <Image src="/coracao.svg" alt="icon de coração" width={40} height={40} />
    </header>
  );
};
