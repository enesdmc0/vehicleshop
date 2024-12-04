import Image from "next/image";
import car from "@/public/car.jpeg";
import { Header, Properties, Vehicles } from "@/components";

export default function Home() {
  return (
    <main className=" overflow-hidden h-screen w-screen gradient1">
      <div className=" relative z-50 h-full w-full pt-[50px] pb-[60px] pl-[50px] pr-[50px] flex flex-col  justify-between  ">
        {/*top*/}
        <Header />

        {/*bottom*/}

        <div className="flex">
          <Properties />
          <Vehicles />
        </div>
      </div>
      <div className="absolute overflow-hidden h-full w-full bottom-[350px] -right-[370px]">
        <Image src={car} width={2029} height={1205} alt="" />
      </div>
    </main>
  );
}
