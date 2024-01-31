import React from 'react'


export const VideoComponent = () => {
  return (
    <div className='border2 flex items-center justify-center mt-[132px] md:mt-[293px]'>
         <video width="90%"  height='648px' controls>
        <source src='https://www.youtube.com/watch?v=DsP9bH7HHh4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
