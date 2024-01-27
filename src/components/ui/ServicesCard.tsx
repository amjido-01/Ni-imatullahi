import React from 'react';

type Cardprops = {
    icon: string;
    title: string;
    content: string;
    containerSize: string; 
}

export const ServicesCard:React.FunctionComponent<Cardprops> =({ icon, title, content, containerSize }) => {
  return (
    <div style={{boxShadow: '5px 5px 30px 0px rgba(0, 0, 0, 0.25)'}} className={`card rounded-[2rem] ${containerSize} mx-aut sm:w-[30rem] md:w-[65%] lg:w-[40%] border-[2px] border-solid`}>

          <div className='h-full p-[40px] md:p-[50px] colored'>
                <img src={icon} className='md:hidden' alt="icon" />
                <h4 className='text-[#fff] tex-[1rem] md:text-[1.25rem] my-[1rem] style font-bold leading-normal'>{title}</h4>
                <p className='text-[#fff] text-[0.80rem] md:text-[0.875rem] style font-normal leading-normal'>{content}</p>
            </div>
    </div>
  )
}
