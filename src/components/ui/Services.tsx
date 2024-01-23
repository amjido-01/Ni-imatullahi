import React from 'react';
import { ServicesCard } from './ServicesCard';

export const Services:React.FunctionComponent = () => {
  const background = ' linear-gradient(90deg, #0F8A80 0%, #0B8E3C 100%)'
  return (
    <div className='md:mt-[15.25rem] border-2'>
      <div className='border-2 w-[80%] mx-auto'>
        <div className='border-red-500 border-2 flex items-center justify-center'>
          <ServicesCard background={background}/>
          <div>
            {}
          </div>
        </div>
      </div>
      </div>
  )
}
