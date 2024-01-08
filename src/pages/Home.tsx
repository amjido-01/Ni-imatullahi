import React from 'react';
import { Hero } from '@/components/ui/Hero';
import { Footer } from '@/components/ui/Footer';
import { Test } from '@/components/ui/Test';
export const Home: React.FunctionComponent = () => {
  return (
    <div className='home'>
      <Hero />
      <Test />
      <Footer />
    </div>
  )
}
