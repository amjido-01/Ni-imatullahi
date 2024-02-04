import React from 'react';
import ala from '@/assets/ala.png'
import {
    Card,
    CardContent,
  } from "@/components/ui/Card"

export const Testimonial = () => {
  return (
    <Card>
    <CardContent className='flex gap-[19px] md:gap-[14px]'>
      <div>
        <img src={ala} alt="" />
      </div>
      <div>
        <div>
            <h3>Abubakar Muhammad Ala</h3>
            <p>Software Engineer</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nesciunt distinctio id tempore sequi amet, molestias animi dolor ullam facilis!</p>
      </div>
    </CardContent>
  </Card>
  
  )
}
