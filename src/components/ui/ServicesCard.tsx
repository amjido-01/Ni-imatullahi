import React from 'react';

type Cardprops = {
    background: string;
    icon: string;
    title: string;
    content: string;
}

export const ServicesCard:React.FunctionComponent<Cardprops> =({background, icon, title, content}) => {
  return (
    <div style={{background: background}} className='relative rounded-[2rem] w-[95%] mx-aut sm:w-[30rem] md:w-[65%] lg:w-[40%] border-2 h-[320px]'>

        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.01)', boxShadow: ' 2px 2px 2px 0px rgba(255, 255, 255, 0.30) inset'}} className='flex h-full w-full relative left-5 md:left-8 bottom-5 md:bottom-8 items-center justify-center border-[0.5px] border-red-500 border-solid border[#aaa]  backdrop-blur-[20px] rounded-[1.57288rem] px-[10px]'>
            <div className='border2'>
                <img src={icon} alt="icon" />
                <h4 className='text-[#fff] tex-[1rem] md:text-[1.25rem] md:my-[1rem] style font-bold leading-normal'>{title}</h4>
                <p className='text-[#fff] text-[0.80rem] md:text-[0.875rem] style font-normal leading-normal'>{content}</p>
            </div>
        </div>
    </div>
  )
}
