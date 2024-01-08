import React from 'react';
import live from '@/assets/live.png';
import kustbookletlg from '@/assets/kustbookletlg.png';
import kustbookletsm from '@/assets/kustbookletsm.png';

interface projectprops {
    deskstopImg: string
    mobileImage: string
    liveIcon: string
}

export const Project:React.FunctionComponent<projectprops> = ({deskstopImg, mobileImage, liveIcon}) => {
  return (
    <div>
        
                <div className='relative'>
                    <img src={deskstopImg} alt="work" className="hidden image md:block"/>
                   <img src={mobileImage} alt="work" className="block image md:hidden "/>
                   
                   <div className='flex items-center justify-center border2'>
                         <div className='absolute p-[1.17rem] flex border-red-500 bg-[#00000033] backdrop-filter backdrop-blur-[29.333332061767578px] border2 md:bottom-[1.84rem] w-[70%] justify-between rounded-[1.17331rem] project'>
                    <div className='border2 text-[#ffffff]'>
                        <h3 className='md:text-[1.76rem] style font-extrabold leading-[120%] capitalize'>KUSTBooklets</h3>
                        <p className='md:text-[1.02669rem] style font-normal md:mt-[0.29rem] leading-[120%] capitalize'>Frontend Developer, UI/UX designer</p>
                    </div>
                    <div>
                        <img src={liveIcon} className='md:w-[3.78594rem] md:h-[3.78594rem] exclude' alt="live" />
                    </div>
                   </div>
                   </div>
                </div>
            </div>
  )
}
