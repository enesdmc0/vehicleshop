import { monomaniac } from '@/app/fonts'
import { cn } from '@/utilities/utils'
import React from 'react'

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
    <div className="space-y-2">
      <p className={cn(" text-color6 text-[64px] leading-[60px]  w-fit  shadow1 uppercase", monomaniac.className)}>
        Carlo’s <br />
        Vehicle DealerShip
      </p>
      <p className="text-color6 text-xl uppercase">
        here you can buy a car or make a test drive
      </p>
    </div>
    <div className="flex items-center text-xl text-white space-x-3">
      <p>Press</p>
      <span className="bg-[#EC4824] rounded-lg w-[58px] h-9 flex items-center justify-center">
        ESC
      </span>
      <p>TO EXIT</p>
    </div>
  </div>
  )
}
