import React from 'react';
import { Button } from './button';
import { VisitArrow } from './VisitArrow';
import x from '@/assets/x.svg';
import facebook from '@/assets/facebook.svg';
import linkedin from '@/assets/linkedin.svg';
import dribble from '@/assets/dribble.svg';
import whatsapp from '@/assets/whatsapp.svg';


export const Footer: React.FunctionComponent = () => {
return (
<div className='border-2 mt-[20rem]'>
<footer className="bg-[#F4F4F4] mt-[4rem]">
    <div className="w-full p-4 mx-auto">
        <div className="border-2 border-red-500 text-[#010101] flex items-center justify-center mt-[6.06rem] md:mt-[14.9rem]">
            <div className='border-2'>
            <p className='text-[0.75rem] md:text-[1.5rem] style font-normal leading-[120%] uppercase'>Do you have any idea</p>
            <h1 className='leading-[120%] tracking[2px] uppercase font-black style w-full sm:w-[80%] md:w-[100%] heads md:text-[5.6rem] lg:text-[6rem]'>let’s build it together</h1>

            <div className='border-2 mt-[1.75rem] md:mt-[6.125rem] border-black flex items-center'>
            <div className='flex items-center border-2 border-red-500 w-full gap-[1.44rem] md:gap-[7.38rem]'>
                <div>
                <Button variant="outline"className='text-[#010101] text-[0.75rem] flex gap-[0.75rem] 
                bg-[#F4F4F4] items-center md:text-[1.5rem] style font-bold leading-[120%] px-[1rem] py-[o.75rem] rounded-[3.125rem] border-[4px] border-[#000] border-solid leading-[120%]'>
        Contact Me Now
        <VisitArrow className='md:mt-1 md:w-[1.375rem] md:h-[1.375rem] stroke-[#010101]'/>
    </Button>
                </div>
            <div className='flex gap-[1rem] md:gap-[2rem]'>
                <img src={dribble} alt="dribble icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={x} alt="twitter x icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={facebook} alt="facebook icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={whatsapp} alt="whatsapp icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={linkedin} alt="linkedin icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
            </div>
            </div>
            </div>
            </div>
            
        </div>
        
        <div className="mt-[7.49rem]">
            <hr className="border-black w-[80%] mx-auto" />
        
        <span className="block montserrat md:text-[0.875rem] style font-normal mt-[0.5rem] text-center leading-normal capitalize text-[#010101]">Copyright © 2023 All Rights Reserved.</span>
        </div>
    </div>
</footer>

</div>
)
}
