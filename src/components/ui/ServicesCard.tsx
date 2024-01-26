import React from 'react';

type Cardprops = {
    largeIcon: string;
    icon: string;
    title: string;
    content: string;
    borderColor: string
}

export const ServicesCard:React.FunctionComponent<Cardprops> =({largeIcon, icon, title, content, borderColor}) => {
  return (
    <div style={{boxShadow: '5px 5px 30px 0px rgba(0, 0, 0, 0.25)', border: `2px solid ${borderColor}`}} className={`card rounded-[2rem] w-[90%] mx-aut sm:w-[30rem] md:w-[65%] lg:w-[40%]`}>

          <div className='h-full p-[40px] md:p-[50px] colored'>
                <img src={icon} className='md:hidden' alt="icon" />
                <img src={largeIcon} className="hidden md:block" alt="icon" />
                <h4 className='text-[#fff] tex-[1rem] md:text-[1.25rem] my-[1rem] style font-bold leading-normal'>{title}</h4>
                <p className='text-[#fff] text-[0.80rem] md:text-[0.875rem] style font-normal leading-normal'>{content}</p>
            </div>

        {/* <div style={{backgroundColor: 'rgba(255, 255, 255, 0.01)', boxShadow: ' 2px 2px 2px 0px rgba(255, 255, 255, 0.30) inset'}} className='flex h-full w-full relative left-5 md:left-8 bottom-5 md:bottom-8 items-center justify-center border-[0.1px] border-solid border-[#7a7a7a]  backdrop-blur-[20px] rounded-[1.57288rem] px-[10x] p-10 md:p-12'>
          
        </div> */}
    </div>
  )
}
