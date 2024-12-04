"use client";
import React from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { modalPayCardAtom } from "@/utilities/jotai";
import { Button, Modal } from "@/components";
import { cn } from "@/utilities/utils";

export const ModalPayCard = () => {
  const [open, setOpen] = useAtom(modalPayCardAtom);

  const test = false;

  return (
    <Modal open={open} setOpen={setOpen} className="w-[980px] h-[600px] ">
      <div className="flex items-center relative">
        <Image
          src="/car.png"
          alt=""
          width={590}
          height={480}
          className="aspect-auto"
        />
        <p className="text-color4 text-6xl shadow8 rotate-[-36deg] absolute left-10 ">
          INSUFFICIENT LIMIT
        </p>
      </div>
      <div className=" flex flex-col justify-between flex-1 pr-14 py-10 ">
        <div className="text-color6 text-lg space-y-3">
          <p>AUDI S5</p>
          <p>185 KMPS, 185 KMPS, 185 KMPS,</p>
          <p>185 KMPS, 2 SEATS, NAVY BLUE</p>
        </div>
        <div className="space-y-3">
          <div className="bg-color7/50 rounded-lg p-3">
            <p className="text-lg text-color2/50">WALLET:</p>
            <p className="text-lg text-color2 leading-none">237.600.000 $</p>
          </div>
          <div className="bg-color7/50 rounded-lg p-3">
            <p className="text-lg text-color2/50">TOTAL PRICE:</p>
            <p
              className={cn(
                "text-[35px] leading-none",
                test ? "text-color3" : "text-color4"
              )}
            >
              180.000.000 $
            </p>
          </div>
          <div className="bg-color7/50 rounded-lg p-3">
            <p className="text-lg text-color2/50">REMAINING IN YOUR CARD:</p>
            <p
              className={cn(
                "text-lg leading-none",
                test ? "text-color2" : "text-color4"
              )}
            >
              57.600.000 $
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-3">
            {test ? (
              <Button
                label="BUY NOW"
                className="flex-1 py-3 bg-color1 shadow5 "
              />
            ) : (
              <Button
                label="PAY BY CARD"
                onClick={() => {}}
                className="flex-1 py-3 bg-color1 shadow5 "
              />
            )}

            <Button
              label="TRADE"
              disabled={!test}
              className="flex-1 py-3 text-color1  bg-color9/50 shadow5 disabled:bg-color8 disabled:text-color2 disabled:cursor-not-allowed"
            />
          </div>

          <Button
            label="GO BACK"
            onClick={() => setOpen((prev) => !prev)}
            className="py-3 bg-color1/50 w-full shadow5"
          />
        </div>
      </div>
    </Modal>
  );
};
