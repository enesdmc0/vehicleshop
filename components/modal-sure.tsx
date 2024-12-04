import React, { FC } from "react";
import { cn } from "@/utilities/utils";
import { useAtom } from "jotai";
import { Button } from "@/components";

interface Props {
  handleClick: () => void;
  atom: any;
}

export const ModalSure: FC<Props> = ({ handleClick, atom }) => {
  const [open, setOpen] = useAtom(atom);

  return (
    <div
      className={cn(
        "h-screen w-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-color2/50 backdrop-blur-lg",
        open ? "" : "hidden"
      )}
    >
      <div
        className={cn(
          "bg-color2 shadow6 rounded-lg relative w-[440px] h-[200px] flex flex-col items-center justify-center space-y-10"
        )}
      >
        <p className="text-color6 text-lg">ARE YOU SURE ?</p>
        <div className="flex gap-3 w-[270px] ">
          <Button
            onClick={handleClick}
            label="SELL"
            className="flex-1 bg-color3 shadow5 py-3"
          />

          <Button
            onClick={() => setOpen(!open)}
            label="GO BACK"
            className="flex-1 bg-[#58BAC2] shadow5 py-3"
          />
        </div>
      </div>
    </div>
  );
};
