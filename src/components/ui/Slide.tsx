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
    <div className='mt-[2.94rem] md:mt-[6.88rem] mb-24'>
       <div className='mt-[2.68rem] md:mt-[4.5rem] flex flex-col gap-[2.61rem] md:gap-[4rem] border-2 md:w-[80%] mx-auto'>
         <Organizations direction='right' logos={logos}/>
         <Organizations direction='left' logos={logos2}/>
       </div>
    </div>
  )
}