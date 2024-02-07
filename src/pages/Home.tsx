import React from 'react';
import { Hero } from '@/components/ui/Hero';
import { Footer } from '@/components/ui/Footer';
import { Bio } from '@/components/ui/Bio';;
import { Services } from '@/components/ui/Services';
import { Testimony } from '@/components/ui/Testimony';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
// import { VideoComponent } from '@/components/ui/VideoComponent';
// import Example from '@/components/ui/HorizontalScrollCarousel2';
import { Organizations } from '@/components/ui/Organizations';
export const Home: React.FunctionComponent = () => {
  return (
    <div className='home'>
      <Hero />
      <Bio />
      <Services />
      <Organizations />
      <Testimony />
      <VideoPlayer />
      {/* <Example /> */}
      {/* <VideoComponent /> */}

      <Footer />
    </div>
  )
}
