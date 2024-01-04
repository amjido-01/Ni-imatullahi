import React from 'react';
// import { HeroBg } from './HeroBg';
import { HamburgerMenu } from './HamburgerMenu';

export const Hero: React.FunctionComponent = () => {
  return (
    <div className='h-screen border-2 hero'>
      <HamburgerMenu />

      <div className='border-2 mt-[18.6rem]'>
          <h1>Crafting Engaging UI/UX Experiences</h1>
      </div>
    </div>
  )
}
