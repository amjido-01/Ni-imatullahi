import React from 'react';
import { Hero } from '@/components/ui/Hero';
import { Footer } from '@/components/ui/Footer';
import { Bio } from '@/components/ui/Bio';;
import { Services } from '@/components/ui/Services';
export const Home: React.FunctionComponent = () => {
  return (
    <div className='home'>
      <Hero />
      <Bio />
      <Services />
      <Footer />
    </div>
  )
}
