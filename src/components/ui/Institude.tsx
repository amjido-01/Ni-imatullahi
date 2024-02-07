import React from 'react';

type institudeProps = { 
    image: string;
}

export const Institude: React.FunctionComponent<institudeProps> = ({image}) => {
  return (
    <img src={image} alt="organization" className='pl-[2.39056rem] object-scale-down border2 md:pl-[96px] h-[1.875rem] md:h-[3.125rem]' />
  )
}