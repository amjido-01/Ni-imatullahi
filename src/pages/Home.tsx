import React from 'react';
import { Hero } from '@/components/ui/Hero';
import { Gallery } from '@/components/ui/Gallery'

export const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Hero />
      <Gallery />
    </div>
  )
}
