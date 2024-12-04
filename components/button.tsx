import { cn } from "@/utilities/utils";
import React, { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: FC<Props> = ({ className, onClick, label, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cn("rounded-lg uppercase text-xl hover_effects", className)}
      {...props}
    >
      {label}
    </button>
  );
};