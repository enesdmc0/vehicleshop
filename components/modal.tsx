import React, {FC} from 'react';
import {cn} from "@/utilities/utils";
import { Mini } from './mini';

interface Props {
    children: React.ReactNode;
    open: boolean;
    setOpen: (open: boolean) => void;
    className?: string;
}

export const Modal: FC<Props> = ({children, setOpen, open, className}) => {
    return (
        <div
            className={cn("h-screen w-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-color2/10 backdrop-blur", open ? "" : "hidden")}>
            <div
                className={cn("bg-color9/70 shadow7 rounded-lg relative flex gap-5 backdrop-blur-2xl", className)}>
                {children}
                <Mini icon="cancel" width={50} height={50} onClick={() => setOpen(false)}
                      className="absolute right-4 top-4 hover_effects cursor-pointer"/>
            </div>
        </div>
    );
};


