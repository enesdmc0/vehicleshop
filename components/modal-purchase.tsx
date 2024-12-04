"use client";
import React from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { modalPurchaseAtom } from "@/utilities/jotai";
import { Button, Modal } from "@/components";
import { cn } from "@/utilities/utils";
import { monomaniac } from "@/app/fonts";

export const ModalPurchase = () => {
  const [open, setOpen] = useAtom(modalPurchaseAtom);
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      className="w-[980px] h-[710px] p-6 flex flex-col"
    >
      <div>
        <p className="text-xl text-color6 uppercase shadow1 ">
          Enjoy the ride by
        </p>
        <p
          className={cn(
            "text-color6 text-6xl leading-[60px] uppercase shadow1 ",
            monomaniac.className
          )}
        >
          Carlo’s <br />
          Vehicle DealerShıp
        </p>
      </div>
      <div className="flex items-end space-y-3 flex-col w-full mt-5 relative z-50">
        <Button
          label="take it for a ride"
          className="w-60 bg-color1 shadow5 text-color2 py-3"
        />
        <Button
          onClick={() => setOpen((prev) => !prev)}
          label="Go back to the store"
          className="w-60 bg-color9 shadow5 text-color1 py-3"
        />
      </div>
      <div className="bottom-5 -left-10 absolute z-50">
        <Image
          src="/svg/man.svg"
          alt=""
          width={370}
          height={555}
          className="aspect-auto"
        />
      </div>
      <div className="-bottom-[60px] border-5 -left-5 absolute z-40">
        <Image
          src="/car.png"
          alt=""
          width={970}
          height={645}
          className="aspect-auto"
        />
      </div>
    </Modal>
  );
};
