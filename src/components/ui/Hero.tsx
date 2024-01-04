import React from 'react';
import { Button } from './button';
// import { Link } from 'react-router-dom';
// import { HeroBg } from './HeroBg';
import { HamburgerMenu } from './HamburgerMenu';
export const Hero: React.FunctionComponent = () => {
  return (
    <div className='h-screen border-2 border-red-400 hero'>
      
      <HamburgerMenu />
      
      <div className='border-2 border-red-500  mt-[18.69rem] md:mt-[18.6rem] flex flex-col items-center justify-center'>

        <div className='w-[80%]'>
           <div className="heading">
              <h1 className='text-[#F4F4F4] leading-[120%] tracking[2px] uppercase font-black style w-[18.5625rem] h[12.0625rem] border2 md:w-[100%] md:h[14.625rem] text-[3rem] md:text-[6rem]'>Crafting Engaging UI/UX Experiences</h1>
           </div>
           
           <div className="flex items-center justify-start mt-[2rem] md:mt-[1.5rem] md:justify-end sub-heading">
            
            <p className='text-[#aaa] w-[15.8125rem] h-[3.625rem] md:w-[29.625rem] md:h-[5.4375rem] border2 text-[0.875rem] md:text-[1.5rem] style font-normal leading-[120%]'>Deliver seamless design and  intuitive functionality for web and mobile apps that enhance user engagement</p>
            
           </div>
        </div>
        
        <div className="flex w-[84%] border2 border-green-500 mt-[3rem] md:mt-[4.5rem] call">

          <Button variant='link' className='text-[#F4F4F4] text-[1rem] md:text-[1.5rem] style font-bold leading-[120%]'>
              Visit my works
          </Button>

        </div>
      </div>
    </div>
  )
}
