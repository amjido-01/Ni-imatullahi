import React from 'react';

interface projectprops {
    deskstopImg: string
    mobileImage: string
    liveIcon: string
    projectName: string
    role: string
}

export const Project:React.FunctionComponent<projectprops> = ({deskstopImg, mobileImage, liveIcon, projectName, role}) => {
  return (
    <div>
        
                <div className='relative'>
                    <img src={deskstopImg} alt="work" className="hidden object-cover image lg:block"/>
                   <img src={mobileImage} alt="work" className="block object-cover image lg:hidden"/>
                   
                   <div className='flex items-center justify-center border2'>
                         <div className='absolute p-[0.65rem] md:p-[1.17rem] flex border-red-500 bg-[#00000033] backdrop-filter backdrop-blur-[29.333332061767578px] bottom-[1.5rem] md:bottom-[1.84rem] w-[80%] md:w-[70%] justify-between rounded-[0.64844rem] md:rounded-[1.17331rem] project'>
                    <div className='border2 text-[#ffffff]'>
                        <h3 className='text-[1.06644rem] md:text-[1.76rem] style font-extrabold leading-[120%] capitalize'>{projectName}</h3>
                        <p className='text-[0.60938rem] md:text-[1.02669rem] style font-normal mt-[0.04rem] md:mt-[0.29rem] leading-[120%] capitalize'>{role}</p>
                    </div>
                    <div>
                        <img src={liveIcon} className='w-[1.75rem] h-[1.75rem] md:w-[3.78594rem] md:h-[3.78594rem] exclude object-cover' alt="live" />
                    </div>
                   </div>
                   </div>
                </div>
            </div>
  )
}
