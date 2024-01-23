import React from 'react';
import research from '@/assets/research.svg'

type Cardprops = {
    background: string;
}

export const ServicesCard:React.FunctionComponent<Cardprops> =({background}) => {
  return (
    <div style={{background: background}} className='relative w-[25.96319rem] rounded-[2rem] h-[20.72631rem] '>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.01)', boxShadow: ' 2px 2px 2px 0px rgba(255, 255, 255, 0.30) inset'}} className='absolute border-[0.5px] border-solid border-[#aaa] w-full h-full backdrop-blur-[20px] -top-10 left-10 md:py-[4.9375rem] md:px-[4rem] rounded-[1.57288rem]'>
            <div className='border-2'>
                <img src={research} alt="icon" />
                <h4 className='text-[#fff] md:text-[1.25rem] md:my-[1rem] style font-bold leading-normal'>User Research and Analysis</h4>
                <p className='text-[#fff] md:text-[0.875rem] style font-normal leading-normal'>Conducting in-depth user research, analyzing data for actionable insights, and creating user personas and journey maps to enhance the user experience</p>
            </div>
        </div>
    </div>
  )
}
