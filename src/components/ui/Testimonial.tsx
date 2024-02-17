import React from 'react';
import {
    Card,
    CardContent,
  } from "@/components/ui/Card";
  import comma from '@/assets/comma.png'

  type testimonialprops = {
    img: string,
    name: string,
    role: string,
    quote: string
  }

export const Testimonial:React.FunctionComponent<testimonialprops> = ({img, name, role, quote}) => {
  return (
    <Card className='rounded-t-[17px] md:rounded-t-[36px] rounded-bl-[36px]'>
    <CardContent className='flex gap-[15px] md:gap-[44px] h-full'>
      {/* <div className='absolute border-2 h-32 w-fit left-0 top-0 bg-white banner'></div> */}
      <div className='mt-[20px] md:mt-[45px]'>
        <img className='w-[70px] h-[70px] md:w-[146px] md:h-[146px]' src={img} alt="" />
      </div>
      <div className='flex itemscenter h-full '>
        <div className='mt-[43px] md:mt-[100px]'>
        <div>
            <h3 className='text-[11px] font-bold leading-[12.63px] md:text-[22px] md:leading-[26.22px] capitalize'>{name}</h3>

            <p className='text-[#AAAAAA] mt-[2px] md:mt-[4px] text-[8px] font-normal md:font-bold leading-[9.6px] md:text-[12.75px] md:leading-[16.8px]'>{role}</p>
        </div>
        <p className='md:mt-[36px] mt-[14px] text-[14px] md:text-[29.14px] w-[162px] md:w-[368px] font-semibold md:font-bold leading-[120%]'>{quote}</p>
        </div>
        <img className='w-[38.74px] h-[33.71px] absolute right-14 object-cover top-20 md:w-[76.09px] md:h-[66.21px]' src={comma} alt="" />
      </div>
    </CardContent>
  </Card>
  
  )
}
