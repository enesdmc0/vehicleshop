"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { modalSureTradeAtom, modalTradeAtom } from "@/utilities/jotai";
import { Modal, Mini, Button, ModalSure } from "@/components";

import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/utilities/utils";

export const ModalTrade = () => {
  const [open, setOpen] = useAtom(modalTradeAtom);
  const [modalSure, setModalSure] = useAtom(modalSureTradeAtom);
  const swiperRef = useRef<SwiperCore>();
  const [test, setTest] = useState<null | number>(null);

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        className="w-[980px] h-[715px] p-14 flex flex-col"
      >
        {test === null ? (
          <>
            <div className="flex items-center">
              <Image
                src="/car.png"
                alt=""
                width={680}
                height={450}
                className="aspect-auto flex-1"
              />
              <div className="flex items-end space-y-8 flex-col w-[270px]  justify-end">
                <div className="text-color6 text-lg space-y-3 w-full">
                  <p>AUDI S5</p>
                  <p>185 KMPS, 185 KMPS, 185 KMPS,</p>
                  <p>185 KMPS, 2 SEATS, NAVY BLUE</p>
                </div>

                <div className="bg-color7/50 rounded-lg p-2 w-full">
                  <p className="text-lg text-color2/50 uppercase">
                    TOTAL PRICE:
                  </p>
                  <p className="text-[35px] text-color3 leading-none">
                    +180.000.000 $
                  </p>
                </div>

                <Button
                  label="GO BACK"
                  onClick={() => setOpen((prev) => !prev)}
                  className="w-full text-color2 shadow6 bg-color1/50 py-3"
                />
              </div>
            </div>
            <div className="h-[220px]">
              <div className="flex items-center space-x-5 ">
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
                  spaceBetween={20}
                  slidesPerView={3}
                >
                  {Array(10)
                    .fill(0)
                    .map((_, i) => (
                      <SwiperSlide key={i} className=" w-[270px]   ">
                        <div
                          className={cn(
                            "h-[210px]  rounded-lg p-3 bg-color2/50"
                          )}
                        >
                          <p className="text-color1 text-xl">AUDI S5</p>
                          <Image
                            alt=""
                            width={250}
                            height={167}
                            src="/car.png"
                          />
                        </div>

                        <Button
                          onClick={() => setTest(i)}
                          label="TRADE THIS ITEM"
                          className={cn(
                            "text-color2 p-2 relative left-1 bottom-8 shadow5 bg-color1"
                          )}
                        />
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
          </>
        ) : (
          <>
            <div className="flex">
              <div className="flex-1 relative">
                <Image src="/car.png" alt="" width={680} height={450} />
                <div className="relative -top-16">
                  <div className="text-color6 text-lg space-y-2 w-[270px]">
                    <p>AUDI S5</p>
                    <p>185 KMPS, 185 KMPS, 185 KMPS,</p>
                    <p>185 KMPS, 2 SEATS, NAVY BLUE</p>
                  </div>

                  <div className="bg-color7/50 rounded-lg p-2 w-[270px]">
                    <p className="text-lg text-color2/50 uppercase">
                      TOTAL PRICE:
                    </p>
                    <p className="text-[35px] text-color3 leading-none">
                      +180.000.000 $
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-end space-y-2 flex-col w-[270px] justify-end">
                <div className="h-[220px] w-full rounded-lg bg-color2/50 flex items-center justify-center">
                  <Image
                    src="/car.png"
                    alt=""
                    width={250}
                    height={170}
                    className="aspect-auto"
                  />
                </div>
                <div className="text-color6 text-lg space-y-1 w-full">
                  <p>AUDI S5</p>
                  <p>185 KMPS, 185 KMPS, 185 KMPS,</p>
                  <p>185 KMPS, 2 SEATS, NAVY BLUE</p>
                </div>

                <div className="bg-color7/50 rounded-lg p-2 w-full">
                  <p className="text-lg text-color2/50 uppercase">
                    SELLING PRICE:
                  </p>
                  <p className="text-[35px] text-color3 leading-none">
                    +180.000.000 $
                  </p>
                </div>
                <div className="bg-color7/50 rounded-lg p-2 w-full">
                  <p className="text-lg text-color2/50 uppercase">
                    MARKET PRICE:
                  </p>
                  <p className="text-[35px] text-color3 leading-none">
                    +180.000.000 $
                  </p>
                </div>
                <Button
                  label="TRADE THIS ITEM"
                  onClick={() => setModalSure((prev) => !prev)}
                  className="w-full text-color2 shadow6 bg-color1 py-3"
                />
                <Button
                  label="GO BACK"
                  onClick={() => setTest(null)}
                  className="w-full text-color2 shadow6 bg-color1/50 py-3"
                />
              </div>
            </div>
          </>
        )}
      </Modal>
      <ModalSure
        atom={modalSureTradeAtom}
        handleClick={() => console.log("tıklandı")}
      />
    </>
  );
};
