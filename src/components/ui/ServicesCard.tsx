import React from 'react'

type Cardprops = {
    background: string;
}

export const ServicesCard:React.FunctionComponent<Cardprops> =({background}) => {
  return (
    <div style={{background: background}} className='relative w-[25.96319rem] h-[20.72631rem] '>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.01)'}} className='absolute border-2 w-full h-full backdrop-blur-[20px] -top-10 left-10'>

        </div>
    </div>
  )
}
