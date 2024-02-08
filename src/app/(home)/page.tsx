import Banner from "./components/Banner";
import CardHome from "./components/CardsHome";
import CountdownTimer from "./components/ContagemRegressiva";
import SectionMarquee from "../../components/common/Marquee";
import InfoCasamento from "./components/SectionCasamento";

export default function Home() {
  return (
    <div className="flex flex-col bg-bgPage gap-8 justify-center items-center max-md:flex-wrap">
      <Banner className="p-0"/>
      <CountdownTimer/>
      <CardHome />
      <SectionMarquee />
      <InfoCasamento />
    </div>
  );
}
