import Image from "next/image";

import Header from "@/components/layout/header/Header";
import TopMenu from "@/components/layout/top-menu/TopMenu";
import Slider from "@/components/pages/home/slider/Slider";

export default function Home() {

  

  return (
    <div className="container mx-auto">
      <Header />
      <TopMenu />
      <Image
        src="/banner.png"
        alt="Banner"
        width={1407}
        height={94}
        className="mx-auto mt-6"
      />
      <Slider />

      <div>

      </div>
    </div>
  );
}
