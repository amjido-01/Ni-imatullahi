import React from 'react';
import { Button } from './button';
import { VisitArrow } from './VisitArrow';

export const Footer: React.FunctionComponent = () => {
  return (
    <div className='border-2 mt-[20rem]'>
        <footer className="bg-[#F4F4F4]  rounded-t-[30rem] mt-[4rem]">
            <div className="w-full p-4 mx-auto mt-auto">
                <div className="border-2 border-red-500 text-[#010101] flex items-center justify-center mt-[14.9rem]">
                    <div className='border-2 md:w-[48.1875rem]'>
                         <p className='md:text-[1.5rem] style font-normal leading-[120%] uppercase'>Do you have any idea</p>
                    <h1 className='leading-[120%] tracking[2px] uppercase font-black style w-full sm:w-[80%] md:w-[100%] heads md:text-[5.6rem] lg:text-[6rem]'>let’s build it together</h1>

                    <div className='border-2 mt-[6.125rem] border-black flex items-center'>
                    <div>
                         <Button variant="outline" className='text-[#010101] text-[1rem] flex gap-[0.75rem] items-center md:text-[1.5rem] style font-bold leading-[120%] px-[2rem] py-[2rem] rounded-[3.125rem] border-[4px] border-[#000] border-solid'>
                        Contact Me Now
                        <VisitArrow className='md:mt-1 md:w-[1.375rem] md:h-[1.375rem] stroke-[#010101]'/>
                    </Button>
                    <div>

                    </div>
                    </div>
                    </div>
                    </div>
                    
                </div>
                
               <div className="mt-[7.49rem]">
                 <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
               </div>
            </div>
        </footer>

    </div>
  )
}
