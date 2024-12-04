"use client";

import { atom } from "jotai";

export const modalPayCardAtom = atom<boolean>(false);
export const modalPayCashAtom = atom<boolean>(false);
export const modalSellAtom = atom<boolean>(false);
export const modalPurchaseAtom = atom<boolean>(false);
export const modalTradeAtom = atom<boolean>(true);

export const modalSureTradeAtom = atom<boolean>(false);
export const modalSureSellAtom = atom<boolean>(false);