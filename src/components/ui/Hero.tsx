import React from 'react';
// import { HeroBg } from './HeroBg';
import { HamburgerMenu } from './HamburgerMenu';

export const Hero: React.FunctionComponent = () => {
  return (
    <div className='h-screen border-2 hero'>
      <HamburgerMenu />

      <div className='border-2 mt-[18.69rem] md:mt-[18.6rem] flex flex-col items-center justify-center'>
        <div>
           <div className="heading">
              <h1 className='w-[18.5625rem] h-[12.0625rem] border-2 md:w-[68.3125rem] md:h-[14.625rem]'>Crafting Engaging UI/UX Experiences</h1>
           </div>
           <div className="sub-heading"></div>
        </div>
        <div className="call"></div>
      </div>
    </div>
  )
}
