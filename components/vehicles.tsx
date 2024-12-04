"use client";
import React from "react";
import { IconNames } from "@/utilities/icon";
import { cn } from "@/utilities/utils";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAtom } from "jotai";
import {
  modalPayCardAtom,
  modalPayCashAtom,
} from "@/utilities/jotai";
import Image from "next/image";
import { PaymentDataProps } from "@/utilities/types";
import { Mini } from "./mini";
import { Button } from "@/components";

export const Vehicles = () => {
  const [test1, setTest1] = useState<null | number>(null);
  const [test2, setTest2] = useState<null | number>(null);

  const [modalPayCard, setModalPayCard] = useAtom(modalPayCardAtom);
  const [modalPayCash, setModalPayCash] = useAtom(modalPayCashAtom);

  const swiperRef = useRef<SwiperCore>();

  const paymentData: PaymentDataProps[] = [
    { text: "pay cash", icon: "cash", onClick: () => setModalPayCash(true) },
    { text: "pay by card", icon: "card", onClick: () => setModalPayCard(true) },
    { text: "sell car", icon: "dollar", onClick: () => console.log("test") },
  ];
  return (
    <div className="flex flex-col w-full justify-between mt-auto bg-color1/10 p-2">
      <div className="flex  space-x-3 ">
        <div className="grid grid-cols-2 gap-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => setTest1(i)}
                className={cn(
                  "w-[98px] h-[98px] rounded-xl  flex items-center justify-center hover_effects",
                  test1 === i ? "bg-color2 shadow6" : "bg-[#202E37]/80"
                )}
              >
                <Mini
                  icon={`vehicle${i + 1}` as IconNames}
                  width={52}
                  height={52}
                />
              </button>
            ))}
        </div>
        <div className="space-y-5">
          <div className="flex space-x-2 h-fit">
            <div className="space-y-2">
              <div className="rounded-lg bg-[#2E393D] flex h-11 w-[440px] px-4 py-[10px] space-x-2 items-center">
                <Mini icon="search" width={24} height={24} />
                <input
                  type="text"
                  placeholder="SEARCH BY VEHICLE NAME"
                  className="placeholder:text-color1 bg-transparent flex-1 outline-none text-color1 "
                />
              </div>
              <div className="grid grid-cols-4 space-x-2">
                {["type1", "type2", "type3", "type4"].map((x, i) => (
                  <Button
                    key={i}
                    onClick={() => setTest2(i)}
                    label={x}
                    className={cn(
                      "text-color1 py-2 ",
                      test2 === i ? "bg-color2 shadow6" : "bg-[#2E393D]"
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="bg-[#2E393D] rounded-lg p-2 space-x-2  flex">
              <div>
                {["top", "front", "back"].map((x, i) => (
                  <p
                    key={i}
                    className=" uppercase text-color1 text-xl text-center"
                  >
                    {x}
                  </p>
                ))}
              </div>
              <div className="rounded-full size-[86px] bg-color2 flex items-center justify-center relative shadow3">
                <Mini icon="car1" width={29} height={29} />
                <Mini
                  className="absolute top-[2px] left-[2px]"
                  icon="direction1"
                  width={32}
                  height={32}
                />
                <Mini
                  className="absolute bottom-[2px] left-[2px]"
                  icon="direction2"
                  width={32}
                  height={32}
                />
                <Mini
                  className="absolute top-[2px] right-[2px]"
                  icon="direction3"
                  width={32}
                  height={32}
                />
                <Mini
                  className="absolute bottom-[2px] right-[2px]"
                  icon="direction4"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <Button
              className="shadow4 w-[120px] bg-color1 flex items-center justify-center"
              label="TEST DRIVE"
            />
          </div>
          <div className=" h-[180px] w-[750px] relative flex space-x-3 ">
            <Mini
              onClick={() => swiperRef.current?.slidePrev()}
              icon="left"
              width={14}
              height={60}
              className="min-w-[14px] flex items-center justify-center hover_effects cursor-pointer"
            />
            <Swiper
              onBeforeInit={(swiper: any) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={10}
              slidesPerView={3}
            >
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <SwiperSlide
                    key={i}
                    className="bg-[#2E393D] rounded-lg pt-3 pl-3 p-1"
                  >
                    <p className="text-color1 text-xl">AUDI S5</p>
                    <Image alt="" width={220} height={145} src="/car.png" />
                  </SwiperSlide>
                ))}
            </Swiper>
            <Mini
              onClick={() => swiperRef.current?.slideNext()}
              icon="right"
              width={14}
              height={60}
              className="min-w-[14px] flex items-center justify-center hover_effects cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-between flex-col">
          <div className="bg-color5 rounded-lg p-3 text-color2 text-xl shadow5">
            <p>WALLET:</p>
            <p>237.600.000 $</p>
          </div>
          <div className="bg-color5 rounded-lg p-3 text-color2 text-xl space-y-2 shadow5">
            <p>TOTAL PRICE:</p>
            <p className="text-color3 text-4xl">180.000.000 $</p>
          </div>
          <div className="grid grid-cols-3 space-x-2">
            {paymentData.map((x, i) => (
              <button
                key={i}
                onClick={x.onClick}
                className="flex-col flex items-center justify-center shadow5 hover_effects"
              >
                <Mini
                  icon={x.icon}
                  width={43}
                  height={32}
                  className="bg-color5 w-full h-full flex items-center justify-center py-3"
                  imageStyle="aspect-auto bg-color5"
                />
                <p className="uppercase text-white py-2 text-sm bg-color5/50 w-full">
                  {x.text}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
