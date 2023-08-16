import { NavBar } from "@/components/common/NavBar";
import { StructurePage } from "@/components/common/StructurePage";
import CardHome from "@/components/pageComponents/home/CardsHome";

export default function Home() {
  return (
    <StructurePage>
      <NavBar />
      <div className="flex flex-1 bg-bgPage h-[100vh] gap-6 text-center justify-center items-center">
        <CardHome />
      </div>
    </StructurePage>
  );
}
