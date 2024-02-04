import React from 'react';
import ala from '@/assets/ala.png'
import {
    Card,
    CardContent,
  } from "@/components/ui/Card"

export const Testimonial = () => {
  return (
    <Card className=' rounded-t-[17px] md:rounded-t-[40px]'>
    <CardContent className='flex gap-[19px] md:gap-[14px] h-full'>
      <div className='mt-[20px] md:mt-[45px]'>
        <img className='w-[70px] h-[70px] md:w-[161px] md:h-[161px]' src={ala} alt="" />
      </div>
      <div className='flex itemscenter h-full '>
        <div className='mt-[43px] md:mt-[100px]'>
        <div>
            <h3 className='text-[10.53px] font-bold leading-[12.63px] md:text-[24px] md:leading-[28.8px] capitalize'>Abubakar Muhammad</h3>
            <p className='text-[#AAAAAA] mt-[2px] md:mt-[4px] text-[8px] font-normal leading-[9.6px] md:text-[14px] md:leading-[16.8px]'>Software Engineer</p>
        </div>
        <p className='md:mt-[36px] mt-[14px] text-[10px] md:text-[16px] md:leading-[25.6px] w-[162px] md:w-[368px] font-semibold leading-[16px]'>Lorem ipsum dolor sit amet consectetur. Nec tortor cras ornare tempor tortor mattis. Praesent mauris quam elit eros mauris. Proin risus sodales feugiat nisi vitae volutpat. </p>
        </div>
      </div>
    </CardContent>
  </Card>
  
  )
}
