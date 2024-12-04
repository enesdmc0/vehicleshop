import icon1 from "@/public/svg/icon1.svg";
import icon2 from "@/public/svg/icon2.svg";
import icon3 from "@/public/svg/icon3.svg";
import icon4 from "@/public/svg/icon4.svg";
import icon5 from "@/public/svg/icon5.svg";
import icon6 from "@/public/svg/icon6.svg";

import vehicle1 from "@/public/svg/vehicle1.svg";
import vehicle2 from "@/public/svg/vehicle2.svg";
import vehicle3 from "@/public/svg/vehicle3.svg";
import vehicle4 from "@/public/svg/vehicle4.svg";
import vehicle5 from "@/public/svg/vehicle5.svg";
import vehicle6 from "@/public/svg/vehicle6.svg";

import search from "@/public/svg/search.svg";

import car from "@/public/svg/car.svg";
import car1 from "@/public/svg/car1.svg";

import cash from "@/public/svg/cash.svg";
import card from "@/public/svg/card.svg";
import dollar from "@/public/svg/dollar.svg";

import left from "@/public/svg/left.svg";
import right from "@/public/svg/right.svg";

import direction1 from "@/public/svg/direction1.svg";
import direction2 from "@/public/svg/direction2.svg";
import direction3 from "@/public/svg/direction3.svg";
import direction4 from "@/public/svg/direction4.svg";

import cancel from "@/public/svg/cancel.svg";

const Icons = {
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    vehicle1,
    vehicle2,
    vehicle3,
    vehicle4,
    vehicle5,
    vehicle6,
    search,
    car,
    car1,
    cash,
    card,
    dollar,
    left,
    right,
    direction1,
    direction2,
    direction3,
    direction4,
    cancel,

} as const;

export type IconNames = keyof typeof Icons;

export default Icons as Record<IconNames, typeof icon1>;