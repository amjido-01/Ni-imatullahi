import React from 'react';
import vid from '@/assets/vid.mp4'
import thumbnail from '@/assets/thumbnail.png'

export const VideoPlayer = () => {
  return (
    <div className='mt-[132px] md:mt-[354px]'>
      <video id='vid' poster={thumbnail} controlsList='nofullscreen nodownload noremoteplayback noplaybackrate' disablePictureInPicture disableRemotePlayback loop controls className='w-[90%] h-1/2 mx-auto rounded-[16px] md:rounded-[32px] '>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
