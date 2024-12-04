"use client";
import React, { useState } from "react";
import { cn } from "@/utilities/utils";
import { PROPERTIES_DATA } from "@/utilities/constants";
import { Mini } from "./mini";
import { Button } from "@/components";

export const Properties = () => {
  const [test, setTest] = useState("swatch");
  const [test3, setTest3] = useState<null | number>(null);

  return (
    <div className="gradient2  w-fit  p-2 space-y-2">
      <div className="h-[104px] flex space-x-2">
        <div className="w-[120px]  bg-color2 p-2 flex-col flex items-center justify-between">
          <Mini icon={PROPERTIES_DATA[0].icon} width={63} height={51} />
          <p className="text-color6 ">{PROPERTIES_DATA[0].text}</p>
        </div>
        <div className="w-[380px] bg-[#21283080] pl-3 py-2 space-y-2">
          <p className="text-color6 text-xl">{PROPERTIES_DATA[0].text1}</p>
          <div className="flex gap-[9px]">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[15px] h-[39px] bg-color6 rounded-full rotate-[40deg]"
                />
              ))}
          </div>
        </div>
      </div>

      <div className="h-[104px] flex space-x-2">
        <div className="w-[120px]  bg-color2 p-2 flex-col flex items-center justify-between">
          <Mini icon={PROPERTIES_DATA[1].icon} width={84} height={54} />
          <p className="text-color6 ">{PROPERTIES_DATA[1].text}</p>
        </div>
        <div className="w-[380px] bg-[#21283080] pl-3 py-2 space-y-2">
          <p className="text-color6 text-xl">{PROPERTIES_DATA[1].text1}</p>
          <div className="flex gap-[9px]">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[15px] h-[39px] bg-color6 rounded-full rotate-[40deg]"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="h-[104px] flex space-x-2">
        <div className="w-[120px]  bg-color2 p-2 flex-col flex items-center justify-between">
          <Mini icon={PROPERTIES_DATA[2].icon} width={64} height={64} />
          <p className="text-color6 ">{PROPERTIES_DATA[2].text}</p>
        </div>
        <div className="w-[380px] bg-[#21283080] pl-3 py-2 space-y-2">
          <p className="text-color6 text-xl">{PROPERTIES_DATA[2].text1}</p>
          <div className="flex gap-[9px]">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[15px] h-[39px] bg-color6 rounded-full rotate-[40deg]"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="h-[104px] flex space-x-2">
        <div className="w-[120px]  bg-color2 p-2 flex-col flex items-center justify-between">
          <Mini icon={PROPERTIES_DATA[3].icon} width={50} height={50} />
          <p className="text-color6 ">{PROPERTIES_DATA[3].text}</p>
        </div>
        <div className="w-[380px] bg-[#21283080] pl-3 py-2 space-y-2">
          <p className="text-color6 text-xl">{PROPERTIES_DATA[3].text1}</p>
          <div className="flex gap-[9px]">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[15px] h-[39px] bg-color6 rounded-full rotate-[40deg]"
                />
              ))}
          </div>
        </div>
      </div>
      <div className=" flex space-x-2">
        <div className="space-y-2">
          <div className="w-[120px] h-[104px] bg-color2 p-2 flex-col flex items-center justify-between">
            <Mini icon={PROPERTIES_DATA[4].icon} width={61} height={61} />
            <p className="text-color6 ">{PROPERTIES_DATA[4].text}</p>
          </div>
          <div className="w-[120px] h-[104px] bg-color2 p-2 flex-col flex items-center justify-between">
            <Mini icon={PROPERTIES_DATA[5].icon} width={61} height={61} />
            <p className="text-color6 ">{PROPERTIES_DATA[5].text}</p>
          </div>
          <div className="space-y-2">
            {["primary", "secondary"].map((x, i) => (
              <Button
                label={x}
                key={i}
                onClick={() => setTest3(i)}
                className={cn(
                  "w-[120px] text-color6  p-2 flex-col flex items-center justify-between",
                  test3 === i ? "bg-color2 shadow6" : "bg-[#21283080]"
                )}
              />
            ))}
          </div>
        </div>
        <div className=" flex flex-col flex-1  ">
          <div className="h-[104px]  space-x-2  w-full flex">
            <div className=" bg-[#21283080] flex items-end px-3 py-2 ">
              <p className="text-color6 text-xl">2 SEATS</p>
            </div>
            <div className=" flex  flex-1  bg-color2/50  p-1 ">
              <div className="flex flex-col flex-wrap w-fit gap-1">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="size-5 bg-white" />
                  ))}
              </div>
            </div>
          </div>
          <div className="p-1 flex bg-color2 mt-2">
            <div className=" grid grid-cols-12 gap-1 ">
              {Array(96)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="size-5 bg-white" />
                ))}
            </div>
            <div className="flex-1 flex-col flex items-center justify-evenly">
              {["swatch", "rgb", "hsl"].map((x, i) => (
                <Button
                  label={x}
                  onClick={() => setTest(x)}
                  key={i}
                  className={cn(
                    "",
                    test === x ? "text-color6 shadow2" : "text-[#354D56]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
