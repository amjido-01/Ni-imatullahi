import React from 'react';
import { ServicesCard } from './ServicesCard';

export const Services:React.FunctionComponent = () => {
  const background = ' linear-gradient(90deg, #0F8A80 0%, #0B8E3C 100%)'
  return (
    <div className='md:mt-[5.22rem] border-2'>
       <div>
        <ServicesCard background={background}/>
       </div>

        </div>
  )
}
