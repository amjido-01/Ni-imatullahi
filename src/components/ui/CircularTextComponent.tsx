import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { motion, useAnimation } from 'framer-motion';
import { Button } from './button';

export const CircularTextComponent: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const textElement = document.querySelector('.text') as HTMLParagraphElement | null;
    if (!textElement) {
      return; // Handle the case when textElement is null
    }

    const rotate = new CircleType(textElement).radius(40);
    console.log(rotate);
    
    // Use a local scroll listener on the component
    const handleScroll: EventListener = () => {
      const yOffset = window.scrollY;
      const componentOffset = textElement.getBoundingClientRect().top;

      // Check if the component is in the viewport
      if (componentOffset < window.innerHeight && componentOffset > 0) {
        textElement.style.transform = `rotate(${yOffset * 0.15}deg)`;
      }
    };

    // Add a scroll listener to the component
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className='relative'>
        <motion.div
      className="w-full relative h-[100px] border-2 border-red-500"
      animate={controls}
    >
      <motion.div
        className="flex flex-col border-2 items-center justify-center w-[200px] h-[200px] fixed right-0 circular-text"
        initial={{ rotate: 0 }}
      >
        <p className="text absolute top20 spaced-words text-[#fff] p-4 font-extrabold leading-none text-[0.50806rem] md:text-[0.875rem] uppercase">
          if yes Do you wanna know more?{' '}
        </p>
        <motion.div
          className="w-[90px] h-[90px] border2 absolute flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <Button className="rounded-[1.81456rem] py-[0.29031rem] px-[1rem] md:rounded-[3.125rem] bg-[#fff] md:py-[0.5rem] md:px-[0.625rem] text-[#010101] text-[0.4355rem] md:text-[0.75rem] leading-normal uppercase style">
            Click me
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
    
  );
};
