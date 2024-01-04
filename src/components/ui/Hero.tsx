import React from 'react';
// import { HeroBg } from './HeroBg';
import { HamburgerMenu } from './HamburgerMenu';

export const Hero: React.FunctionComponent = () => {
  return (
    <div className='h-screen border-2 border-red-400 hero'>
      <HamburgerMenu />

      <div className='border-2 mt-[18.69rem] md:mt-[18.6rem] flex flex-col items-center justify-center'>

        <div className='w-[88%]'>
           <div className="heading">
              <h1 className='text-[#F4F4F4] leading-[120%] tracking-[2px] uppercase font-black style w-[88%] h[12.0625rem] border-2 md:w-[100%] md:h[14.625rem] text-[3rem] md:text-[6rem]'>Crafting Engaging UI/UX Experiences</h1>
           </div>
           <div className="sub-heading"></div>
        </div>
        <div className="call"></div>
      </div>
    </div>
  )
}
