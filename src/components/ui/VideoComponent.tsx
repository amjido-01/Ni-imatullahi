import React from 'react'


export const VideoComponent = () => {
  return (
    <div className='border-2 flex items-center justify-center mt-[132px] md:mt-[293px]'>
         <video width="90%" height='648px' controls>
        <source src=' "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}