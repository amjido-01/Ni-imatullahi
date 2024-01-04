import React from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { AnimatedLink } from './Links';
export const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-20 w-full start-0">

      <div className={`max-w-screen-xl border-2 border-red-600 flex flex-wrap items-center justify-between mx-auto`}>

        <div>
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LOGO</span>
        </a>
        </div>

        <div className="flex items-center space-x-3 border-2 md:space-x-0">
          
         <span className='text-[#fff] md:text-[1.25rem] font-normal leading-[120%] capitalize'>Menu</span>

          <div className='z'>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={30} rounded distance='sm'/>
          </div>

        </div>
        
      </div>
      <div
        className={`fixed right-0 w-full h-screen shadow-4xl top[5rem] bg-red-500 border-2 border-red-500  transition-transform ${
          isOpen ? 'translate-x-0 duration-500 ease-out' : 'translate-x-full duration-500 ease-in'
        }`}
      >
        <AnimatedLink />
        {/* Add your menu content here */}
      </div>

    </nav>
  );
};