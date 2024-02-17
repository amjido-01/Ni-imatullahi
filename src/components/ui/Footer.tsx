import React from 'react';
import { Button } from './button';
import { VisitArrow } from './VisitArrow';
import x from '@/assets/x.svg';
import facebook from '@/assets/facebook.svg';
import linkedin from '@/assets/linkedin.svg';
import whatsapp from '@/assets/whatsapp.svg';


export const Footer: React.FunctionComponent = () => {
return (
<div className='mt-[20rem]'>
<footer className="bg-[#F4F4F4] mt-[4rem]">
    <div className="w-full py-4 mx-auto">
        <div className=" text-[#010101] flex items-center justify-center mt-[7.06rem] md:mt-[12.9rem] w-[90%] sm:w-[70%] md:w-[88%] lg:w-[48.1875rem] mx-auto">
            <div className=''>
            <p className='text-[0.75rem] md:text-[1.5rem] style font-normal leading-[120%] uppercase'>Do you have any idea</p>
            <h1 className='leading-[120%] tracking[2px] uppercase font-black style w-full sm:w-[80%] md:w-[100%] heads md:text-[5.6rem] lg:text-[6rem]'>let’s build it together</h1>

            <div className='mt-[1.75rem] md:mt-[6.125rem] flex items-center'>

            <div className='flex flex-row items-center w-full gap-[1rem] md:gap-[7.38rem]'>
                <div>
                <Button variant="outline"className='text-[#010101] text-[0.75rem] flex gap-[0.3rem] md:gap-[0.75rem] 
                bg-[#F4F4F4] items-center md:text-[1.5rem] style font-bold leading-[120%] px-[0.8rem] py-[0.75rem] md:px-[1.8rem] md:py-[1.5rem] rounded-[3.125rem] border-[1.5px] md:border-[3px] border-[#000] border-solid leading-[120%]'>
        Contact Me Now
        <VisitArrow animateX={[-5, 8, -5]} className='md:mt-1 w-[1.9rem] md:w-[1.8rem] md:h-[1.375rem] stroke-[#010101]'/>
    </Button>
                </div>
            <div className='flex min-w-0 gap-[0.5rem] sm:gap-[1rem] md:gap-[2rem]'>
                <img src={x} alt="twitter x icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={facebook} alt="facebook icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={whatsapp} alt="whatsapp icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
                <img src={linkedin} alt="linkedin icon" className='w-[1.375rem] h-[1.375rem] md:w-[2rem] md:h-[2rem]' />
            </div>
            </div>
            </div>
            </div>
            
        </div>
        
        <div className="mt-[2rem] md:mt-[7.49rem]">
            <hr className="w-[90%] footer-hr md:w-[80%] mx-auto" />
        
        <span className="block montserrat text-[0.625rem] md:text-[0.875rem] style font-normal mt-[0.5rem] text-center leading-normal capitalize text-[#010101]">Copyright © 2023 All Rights Reserved.</span>
        </div>
    </div>
</footer>

</div>
)
}
