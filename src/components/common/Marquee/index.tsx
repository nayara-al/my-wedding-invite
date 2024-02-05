import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function SectionMarquee() {
  return (
    <div className="py-12 h-full bg-white w-full">
      <Marquee autoFill pauseOnHover pauseOnClick gradient gradientColor="#BDAFAA" gradientWidth="120" className="max-w-[800px]">
          <Image width={400} height={400} src={"/images/3.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/4.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/5.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/7.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/9.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/10.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/12.jpg"} alt="" className="mx-8 rounded-xl"/>
      </Marquee>
    </div>
  )
}
