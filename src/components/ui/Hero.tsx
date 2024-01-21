import React from 'react';
import { Button } from './button';
import {VisitArrow} from './VisitArrow'
import { HamburgerMenu } from './HamburgerMenu';
import { Gallery } from './Gallery'
export const Hero: React.FunctionComponent = () => {
  return (
    <div className=' border-red-500 border2'>
      <HamburgerMenu />

      <div className='flex md:h-[90vh] border2 flex-col justify-center items-centr'>

        <div className='border2 border-green-500 hero'>
          <div className='w-[90%] border2 px-2 sm:px-0 sm:w-[85%] md:w-[84.2%] mx-auto mt-[12.12rem] intro md:mt-[17rem]'>
           <div className="heading">
              <h1 className='text-[#F4F4F4] leading-[120%] uppercase font-black style w-full sm:w-[80%] md:w-[100%] heads md:text-[5.6rem] lg:text-[6rem]'>designer with a professional vision</h1>
           </div>
           
           <div className="flex items-center justify-start mt-[1.5rem] md:mt-[1rem] md:justify-end sub-heading">
            <p className='text-[#aaa] w-[15.8125rem] h-[3.625rem] md:w-[29.625rem] md:h-[5.4375rem] text-[0.875rem] md:text-[1.5rem] style font-normal leading-[120%]'>Deliver seamless design and  intuitive functionality for web and mobile apps that enhance user engagement</p>
           </div>

            <div className="flex mt-[3rem] mx-auto md:mt-[2.5rem] call">
              <Button variant='link' className='text-[#F4F4F4] text-[1rem] flex gap-[0.75rem] items-center md:text-[1.5rem] style font-bold leading-[120%] px-0'>
                  Visit my works
              <VisitArrow className='md:mt-[0.4rem] border2 md:w-[3.375rem] md:h-[1.5rem] stroke-[#F4F4F4]'/>
            </Button>
          </div>
        </div>
        </div>

      </div>
      <Gallery />
    </div>
  )
}