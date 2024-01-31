import React from 'react'
import { Organizations } from '@/components/ui/Organizations';
import stem from '@/assets/stem.png';
import stripe from '@/assets/stripe.png';
import slack from '@/assets/slack.png';
import startbench from '@/assets/startbench.png';
import tesla from '@/assets/tesla.png';
import amazon from '@/assets/amazon.png'
import airbnb from '@/assets/airbnb.png';
import gdsc from '@/assets/gdsc.png';

const logos = [ 
    gdsc,
    stem,
    startbench,
]
const logos2 = [
  airbnb,
  amazon,
  tesla,
  slack,
   stripe,
]

export const Slides: React.FunctionComponent = () => {
  return (
    <div className='mt-[146px] border2 md:mt-[209px] mb-24'>
      <h3 className='mb-[10px] md:mb-[18px] border2  w-[80%]  mx-auto text-white'>Work experiences</h3>
         <hr className="white-hr w-[90%] md:w-[80%] mx-auto mb-[44px] md:mb-[80px]" />
       <div className='flex flex-col gap-[1rem] md:gap-[2rem] border2 md:w-[80%] mx-auto'>
         <Organizations direction='right' logos={logos}/>
         <Organizations direction='left' logos={logos2}/>
       </div>
       <hr className="white-hr w-[90%] md:w-[80%] mx-auto mt-[44px] md:mt-[80px]" />
    </div>
  )
}