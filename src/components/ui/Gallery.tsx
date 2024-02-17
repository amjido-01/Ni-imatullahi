import React from 'react';
import live from '@/assets/live.png';
import kustbookletlg from '@/assets/kustbookletlg.png';
import kustbookletsm from '@/assets/kustbookletsm.png';
import alaportfoliolg from '@/assets/alaportfoliolg.png';
import alaportfoliosm from '@/assets/alaportfoliosm.png';
import bookbaylg from '@/assets/bookbaylg.png';
import bookbaysm from '@/assets/bookbaysm.png';
import pixellg from '@/assets/pixellg.png';
import { Button } from './button';
import pixelsm from '@/assets/pixelsm.png';
import { Project } from './Project';
import { Eye } from 'lucide-react';
export const Gallery: React.FunctionComponent = () => {
    return (
        <div className="mt-[7.44rem] sm:mt-[4rem] md:mt-[22rem] lg:mt-[7.13rem] flex flex-col gap-[2.54rem] md:gap-[1.5rem]">

           <div className="flex flex-col lg:flex-row justify-center items-center gap-[2.54rem] md:gap-[1.5rem]">
            
            <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
                <Project deskstopImg={kustbookletlg} mobileImage={kustbookletsm} liveIcon={live} projectName='KUSTBooklets' role='Frontend Developer, UI/UX designer' />
            </div>
            
             <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
                <Project deskstopImg={alaportfoliolg} mobileImage={alaportfoliosm} liveIcon={live} projectName='ala’s Portfolio' role='Product Designer' />
            </div>
           </div>

           <div className="flex flex-col lg:flex-row justify-center items-center gap-[2.54rem] md:gap-[1.5rem]">
            <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
               <Project deskstopImg={bookbaylg} mobileImage={bookbaysm} liveIcon={live} projectName='Bookbay' role='UI/UX designer' />
            </div>
             <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
               <Project deskstopImg={pixellg} mobileImage={pixelsm} liveIcon={live} projectName='Sarco pixel' role='Product Designer'/>
            </div>

           </div>
           <div className='mt-[39px] md:mt-[50px] flex justify-end'>
           <Button variant='link' className='text-[#EEEEEE] text-[10px] font-black md:text-[16px] flex gap-[0.5rem] md:gap-[0.75rem] items-center style leading-[120%]'>
             view all works
             <Eye />
            </Button>
                <h3 className=''></h3>
           </div>
        </div>
    )
}