
import { useEffect } from 'react';
import { Word } from './Word';
// import  {CircularTextComponent}  from './CircularTextComponent';
import CircleType from 'circletype';
import { motion, useAnimation } from 'framer-motion';
import { Button } from './button';

export const Me: React.FunctionComponent = () => {
  const controls = useAnimation();
   // Create a reference to the main container element.

    useEffect(() => {
      const textElement = document.querySelector('.text') as HTMLParagraphElement | null;
      if (!textElement) {
        return; // Handle the case when textElement is null
      }

      const rotate = new CircleType(textElement).radius(40);
      console.log(rotate);

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
    }, [controls])

return (
  <div className='h-[300vh] border2 border-red-500 mt-14'>
      
      <div className='sticky overflow-hidden top-0 h-screen border2 w-[90%] md:w-[80%] mx-auto'>
      <div>
        <span className='bar mb-[0.25rem] h-[0.125rem] md:h-[0.25rem]' 
            style={{ backgroundColor:  "white" }}>
        </span>
        <p className='text-[#fff] mb-[1rem] md:mb-[1.75rem] text-[0.625rem] md:text-[1rem] style font-normal leading-[120%] uppercase'>
            About me
        </p>
      </div>
    <Word value='Hi there, I’m Muhammad Niimatullah, based in kano. user Interface designer with a passion for designing beautiful and functional user experiences with 2+ years of Experiences . Minimalist who believe less and simple is the best.' />


    <div className='relative'>
        <motion.div
      className="w-full relative flex justify-end border2 border-red-500"
      animate={controls}
    >
      <motion.div
        className="flex border2 items-center justify-center mr-10 w-[100px] h-[100px] md:h-[200px] right-0 circular-text"
        initial={{ rotate: 0 }}
      >
        <p className="text absolute top20 spaced-words text-[#fff] p-4 font-extrabold leading-none text-[0.50806rem] md:text-[0.875rem] uppercase">
          if yes Do you wanna know more?{' '}
        </p>
        <motion.div
          className="w-[100px] h-[90px] border2 absolute flex items-center justify-center"
          // whileHover={{ scale: 1.1 }}
        >
          <Button className="rounded-[1.81456rem] py-[0.29031rem] px-[1rem] md:rounded-[3.125rem] bg-[#fff] md:py-[0.5rem] md:px-[0.625rem] text-[#010101] text-[0.4355rem] md:text-[0.75rem] leading-normal hover:bg-white uppercase style">
            Click me
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>

      </div>
    </div>
  )
}
