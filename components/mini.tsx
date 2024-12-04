import React from "react";
import Image from "next/image";
import {cn} from "@/utilities/utils";
import Icons, {IconNames} from "@/utilities/icon";

interface MiniProps {
    width?: number;
    height?: number;
    icon: IconNames;
    className?: string;
    onClick?: () => void;
    imageStyle?: string;
}

export const Mini: React.FC<MiniProps> = ({
                                       width = 24,
                                       height = 24,
                                       icon,
                                       onClick,
                                       className,
                                       imageStyle
                                   }) => {
    return (
        <div
            onClick={onClick}
            className={cn("transition-all ease-out duration-200", className)}
        >
            <Image src={Icons[icon]} alt={icon} width={width} height={height} className={imageStyle}/>
        </div>
    );
};
