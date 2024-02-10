import React from 'react';
import gdsc from '@/assets/gdsc.png';
import gdscsm from '@/assets/gdscsm.png'
import stem from '@/assets/stem.png';
import stemsm from '@/assets/stemsm.png'
import stripe from '@/assets/stripe.png';
import slack from '@/assets/slack.png';
import startbench from '@/assets/startbench.png';
import startbenchsm from '@/assets/startbenchsm.png';
import tesla from '@/assets/tesla.png';
import amazon from '@/assets/amazon.png'
import airbnb from '@/assets/airbnb.png';

export const Organizations:React.FunctionComponent = () => {
  return (
    <div className='border2 mt-[146px] md:mt-[209px]'>
       <div className='border2 w-full md:w-[80%] mx-auto'>
       <h3 className='text-[#AAAAAA] w-[90%] md:w-full  mx-auto text-[0.625rem] md:text-[1rem]'>Work experiences</h3>
        <hr className="white-hr w-[90%] md:w-full mx-auto mb-[44px] md:mb-[80px]" />
        <div className='flex items-center overflow-x-auto justify-center gap-[24px] md:gap-[96px]'>
                <div>
                <img src={gdscsm} className='block md:hidden' alt='org'/>
                <img src={gdsc} className='hidden md:block' alt="org"/>
                </div>
                <div>
                <img src={stemsm} className='block md:hidden' alt='org'/>
                <img src={stem} className='hidden md:block' alt="org"/>
                </div>
                <div>
                <img src={startbenchsm} className='block md:hidden' alt='org'/>
                <img src={startbench} className='hidden md:block' alt="org"/>
                </div>
            </div>

         <div className='mt-[24px] md:mt-[52px] flex flex-col md:flex-row border-2 justify-center mdjustify-between mdgap-[52px] justifycenter items-center justifycenter overflow-x-auto gap-4'>

              <div className='flex gap-8 md:gap20 border-2 w-full justify-center md:justify-start'>
              <div>
                <img src={airbnb} className='' alt="org"/>
                </div>

                <div>
                <img src={amazon} className='w[65.63px] h[28.64px]' alt="org"/>
                </div>

                <div>
                <img src={tesla} className='' alt="org"/>
                </div>
              </div>

                <div className='flex gap-8'>
                  
                <div className=''>
                <img src={slack} className='' alt="org"/>
                </div>

                <div>
                <img src={stripe} className='' alt="org"/>
                </div>
                </div>
            </div>
       </div>
    </div>
  )
}
