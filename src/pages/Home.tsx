import React from 'react';
import { Hero } from '@/components/ui/Hero';
import { Footer } from '@/components/ui/Footer';
import { Me } from '@/components/ui/Me';
export const Home: React.FunctionComponent = () => {
  return (
    <div className='home'>
      <Hero />
      <Me />
      <Footer />
    </div>
  )
}
