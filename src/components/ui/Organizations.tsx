import React from 'react';
import gdsc from '@/assets/gdsc.png';
import gdscsm from '@/assets/gdscsm.png'

export const Organizations:React.FunctionComponent = () => {
  return (
    <div className='border-2 mt-[146px] md:mt-[209px]'>
       <div className='border-2 w-full md:w-[80%] mx-auto'>
       <h3 className='text-[#AAAAAA]  mx-auto text-[0.625rem] md:text-[1rem]'>Work experiences</h3>
        <hr className="white-hr  mx-auto mb-[44px] md:mb-[80px]" />
        <div className='border-2 w-full md:w-[80%] mx-auto'>
            <div className='flex gap-[24px] md:gap-[96px]'>
                <div>
                <img src={gdscsm} className='block border-2 md:hidden' alt='org'/>
                <img src={gdsc} className='hidden md:block' alt="org"/>
                </div>
                <div>
                <img src={gdscsm} className='block border-2 md:hidden' alt='org'/>
                <img src={gdsc} className='hidden md:block' alt="org"/>
                </div>
                <div>
                <img src={gdscsm} className='block border-2 md:hidden' alt='org'/>
                <img src={gdsc} className='hidden md:block' alt="org"/>
                </div>
            </div>
            <div></div>
        </div>
       </div>
    </div>
  )
}
