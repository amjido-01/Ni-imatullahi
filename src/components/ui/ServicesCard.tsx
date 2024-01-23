import React from 'react';

type Cardprops = {
    background: string;
    icon: string;
    title: string;
    content: string;
}

export const ServicesCard:React.FunctionComponent<Cardprops> =({background, icon, title, content}) => {
  return (
    <div style={{background: background}} className='relative w-[18rem] h-[18rem] md:w-[25.96319rem] rounded-[2rem] md:h-[20.72631rem] '>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.01)', boxShadow: ' 2px 2px 2px 0px rgba(255, 255, 255, 0.30) inset'}} className='absolute flex items-center justify-center border-[0.5px] border-solid border-[#aaa] w-full h-full backdrop-blur-[20px] -top-5 left-5 md:-top-10 md:left-10 md:py-[4.9375rem] md:px-[4rem] rounded-[1.57288rem]'>
            <div className='border-2'>
                <img src={icon} alt="icon" />
                <h4 className='text-[#fff] tex-[1rem] md:text-[1.25rem] md:my-[1rem] style font-bold leading-normal'>{title}</h4>
                <p className='text-[#fff] text-[0.80rem] md:text-[0.875rem] style font-normal leading-normal'>{content}</p>
            </div>
        </div>
    </div>
  )
}
