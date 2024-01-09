import React from 'react';
import { Word } from './Word';

export const Me: React.FunctionComponent = () => {
  return (
    <div className='mt-[7.31rem] md:mt-[13.69rem] w-[90%] md:w-[80%] mx-auto'>
     <div>
      <span className='bar mb-[0.25rem] h-[0.125rem] md:h-[0.25rem]' style={{ backgroundColor: "white" }}></span>
       <p className='text-[#fff] mb-[1rem] md:mb-[1.75rem] text-[0.625rem] md:text-[1rem] style font-normal leading-[120%] uppercase'>About me</p>
     </div>
     <Word value='Hi there, I’m Muhammad Niimatullah, based in kano. user Interface designer with a passion for designing beautiful and functional user experiences with 2+ years of Experiences . Minimalist who believe less and simple is the best.' />
    </div>
  )
}
