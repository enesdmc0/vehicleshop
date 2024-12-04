"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import {
  modalPurchaseAtom,
  modalSellAtom,
  modalSureSellAtom,
} from "@/utilities/jotai";
import { Button, Mini, Modal, ModalSure } from "@/components";

import { cn } from "@/utilities/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css";
import "swiper/css/grid";

import { Grid } from "swiper/modules";

export const ModalSell = () => {
  const [open, setOpen] = useAtom(modalSellAtom);
  const [modalSure, setModalSure] = useAtom(modalSureSellAtom);
  const [modalPurchase, setModalPurchase] = useAtom(modalPurchaseAtom);
  const [test, setTest] = useState<number | null>(null);

  const handleSell = () => {
    setOpen((prev) => !prev);
    setModalSure((prev) => !prev);
    setModalPurchase((prev) => !prev);
  };
  const swiperRef = useRef<SwiperCore>();
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        className="w-[980px] h-[530px] p-5 flex"
      >
        <div className="flex-1">
          <div className="flex items-center space-x-5 ">
            <Mini
              onClick={() => swiperRef.current?.slidePrev()}
              icon="left"
              width={14}
              height={60}
              className="min-w-[14px] flex items-center justify-center "
            />
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              grid={{
                rows: 2,
              }}
              modules={[Grid]}
              className="w-[580px] h-[500px]"
              onBeforeInit={(swiper: any) => {
                swiperRef.current = swiper;
              }}
            >
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <SwiperSlide key={i} className=" w-[270px]   ">
                    <div
                      className={cn(
                        "h-[210px]  rounded-lg p-3",
                        test === i ? "bg-color2 shadow6" : "bg-color2/50"
                      )}
                    >
                      <p className="text-color1 text-xl">AUDI S5</p>
                      <Image alt="" width={250} height={167} src="/car.png" />
                    </div>

                    <Button
                      onClick={() => setTest(i)}
                      label="180.000.000 $"
                      className={cn(
                        "text-color2 p-3 relative left-1 bottom-8 shadow5 ",
                        test === i ? "bg-color3" : "bg-color1"
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
              className="min-w-[14px] flex items-center justify-center "
            />
          </div>
        </div>
        <div className="flex items-end space-y-3 flex-col w-[270px]  justify-end">
          {test === 1 ? (
            <div className="flex items-center justify-center h-full w-full">
              <p className="uppercase text-xl text-color6 text-center">
                ıtem removed <br />
                from the garage
              </p>
            </div>
          ) : (
            <div
              className={cn(" w-full space-y-5", test !== null ? "" : "hidden")}
            >
              <div className="text-color6 text-lg space-y-3 w-full">
                <p>AUDI S5</p>
                <p>185 KMPS, 185 KMPS, 185 KMPS,</p>
                <p>185 KMPS, 2 SEATS, NAVY BLUE</p>
              </div>
              <div className="space-y-3">
                <div className="bg-color7/50 rounded-lg p-2">
                  <p className="text-lg text-color2/50 uppercase">WALLET:</p>
                  <p className="text-lg text-color2 leading-none">
                    237.600.000 $
                  </p>
                </div>
                <div className="bg-color7/50 rounded-lg p-2">
                  <p className="text-lg text-color2/50 uppercase">
                    SELLING PRICE:
                  </p>
                  <p className="text-[35px] text-color3 leading-none">
                    +180.000.000 $
                  </p>
                </div>
                <div className="bg-color7/50 rounded-lg p-2">
                  <p className="text-lg text-color2/50 uppercase">
                    wallet after sell:
                  </p>
                  <p className="text-lg text-color3 leading-none">
                    360.000.000 $
                  </p>
                </div>
              </div>
            </div>
          )}
          <Button
            disabled={test === null || test === 1}
            label="take Sell thıs ıtem now"
            onClick={() => setModalSure((prev) => !prev)}
            className={cn(
              "w-full disabled:cursor-not-allowed disabled:bg-color8 bg-color1 shadow6 text-color2 py-3"
            )}
          />
          <Button
            label="Go go back to purchase"
            onClick={() => setOpen((prev) => !prev)}
            className="w-full bg-[#58BAC2] shadow6 text-color2 py-3 "
          />
        </div>
      </Modal>
      <ModalSure atom={modalSureSellAtom} handleClick={handleSell} />
    </>
  );
};
