import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { Button } from './button';

const CircularTextComponent: React.FC = () => {
  useEffect(() => {
    // Select the text you want to make circular
    const textElement = document.querySelector('.text');

    // Make the selected text circular with CircleType
    const rotate = new CircleType(textElement).radius(65);

    // Add a scroll listener to the window object and rotate the selected text according to the scroll
    // We use * 0.15 to make the rotation look smoother
    const handleScroll = () => {
      textElement.style.transform = `rotate(${window.scrollY * 0.15}deg)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="container">
      <div className="circular-text">
        <p className="text spaced-words text-[#fff] font-extrabold leading-none text-[0.50806rem] md:text-[0.875rem] uppercase">if yes Do you wanna know more? </p>
        <div className="arrow">
            <Button className='rounded-[3.125rem] bg-[#fff] py-[0.5rem] px-[0.625rem] text-[#010101] text-[0.75rem] leading-normal uppercase style'>Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default CircularTextComponent;
