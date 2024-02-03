import Image from "next/image";

export const PageTitle = () => {
  return (
    <header className="md:hidden bg-second text-[32px] flex items-center justify-center p-2 text-white font-gwendolyn">
      <Image src="/coracao.svg" alt="icon de coração" width={40} height={40} />
    </header>
  );
};
