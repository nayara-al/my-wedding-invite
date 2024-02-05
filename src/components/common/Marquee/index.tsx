import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function SectionMarquee() {
  return (
    <div className="py-12 h-full bg-white w-full flex items-center justify-center">
      <Marquee autoFill pauseOnHover pauseOnClick gradient gradientColor="#BDAFAA" gradientWidth="120" className="max-w-[1280px] w-[90%]">
          <Image width={400} height={400} src={"/images/3.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/4.jpg"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/5.JPG"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/7.JPG"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/9.JPG"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/10.JPG"} alt="" className="mx-8 rounded-xl"/>
          <Image width={400} height={400} src={"/images/12.JPG"} alt="" className="mx-8 rounded-xl"/>
      </Marquee>
    </div>
  )
}
