import React from 'react';

type Cardprops = {
    icon: string;
    desktopIcon?: string;
    title: string;
    content: string;
    containerSize: string; 
    bg?: string;
}

export const ServicesCard = ({ icon, title, content, containerSize, bg, desktopIcon }: Cardprops) => {
  return (
    <div style={{boxShadow: '5px 5px 30px 0px rgba(0, 0, 0, 0.25)', border: `1px solid`, backgroundImage: bg}} className={`rounded-[2rem] bg-${bg} ${containerSize} mx-aut sm:w-[30rem] md:w-[65%] lg:w-[40%] p-[1px]`}>

          <div className='card  h-full w-full rounded-[2rem] p-[40px] md:p-[50px]'>
                <img src={icon} className='block md:hidden' alt="icon" />
                <img src={desktopIcon} className='hidden md:block' alt="icon" />
                <h4 className='text-[#fff] tex-[1rem] md:text-[1.25rem] my-[1rem] style font-bold leading-normal'>{title}</h4>
                <p className='text-[#fff] text-[0.80rem] md:text-[0.875rem] style font-normal leading-normal'>{content}</p>
            </div>
    </div>
  )
}
