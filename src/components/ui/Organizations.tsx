import React from 'react';
import gdsc from '@/assets/gdsc.png';
import gdscsm from '@/assets/gdscsm.png'
import stem from '@/assets/stem.png';
import stemsm from '@/assets/stemsm.png';
import startbench from '@/assets/startbench.png';
import startbenchsm from '@/assets/startbenchsm.png';

export const Organizations:React.FunctionComponent = () => {
  return (
    <div className='border2 mt-[146px] md:mt-[209px]'>
       <div className='border2 w-full md:w-[80%] mx-auto'>
       <h3 className='text-[#AAAAAA] w-[90%] md:w-full  mx-auto text-[0.625rem] md:text-[1rem]'>Work experiences</h3>
        <hr className="white-hr w-[90%] md:w-full mx-auto mb-[44px] md:mb-[80px]" />
        <div className='flex flex-col md:flex-row items-center overflow-x-auto justify-center gap-[24px] md:gap-[100px]'>
                <div className='flex items-center gap-[50px] md:gap-[100px]'>
                <div>
                <img src={startbenchsm} className='block md:hidden' alt='org'/>
                <img src={startbench} className='hidden md:block' alt="org"/>
                </div>
                <div>
                <img src={gdscsm} className='block md:hidden' alt='org'/>
                <img src={gdsc} className='hidden md:block' alt="org"/>
                </div>
                </div>

                <div className='flex items-center gap-[50px] md:gap-[100px]'>
                <div>
                <img src={stemsm} className='block md:hidden' alt='org'/>
                <img src={stem} className='hidden md:block' alt="org"/>
                </div>
                <div>
                <img src={startbenchsm} className='block md:hidden' alt='org'/>
                <img src={startbench} className='hidden md:block' alt="org"/>
                </div>
                </div>
            </div>
            <hr className="white-hr w-[90%] md:w-full mx-auto mt-[44px] md:mt-[80px]" />
       </div>
    </div>
  )
}
