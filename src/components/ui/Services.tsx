import React from 'react';
import { ServicesCard } from './ServicesCard';
import research from '@/assets/research.svg'
import prototyping from '@/assets/prototyping.svg';
import testing from '@/assets/testing.svg';
import visualDesign from '@/assets/visualDesign.svg';
import proud from '@/assets/proud.svg'
import proudsmlf from '@/assets/proudsmlf.svg'
import proudrg from '@/assets/proudrg.svg'
import proudrgsm from '@/assets/proudrgsm.svg';
const cardData = [
  {id: 0,
    icon: research,
    background: 'linear-gradient(76deg, #13867D 9.68%, rgba(8, 94, 40, 0.00) 90.29%)',
    title: 'User Research and Analysis',
    content: 'Conducting in-depth user research, analyzing data for actionable insights, and creating user personas and journey maps to enhance the user experience'
  },
  {id: 1,
    background: 'linear-gradient(90deg, #911308 0%, rgba(142, 19, 8, 0.00) 109.77%)',
    icon: prototyping,
    title: 'Prototyping and Wireframing',
    content: 'Creating interactive prototypes and wireframes, refining through iterative testing for user feedback, and delivering a clear roadmap to clients and development teams for the final product.'
  },
  {id: 2,
    icon: visualDesign,
    background: ' linear-gradient(90deg, #4D4D4D -2.41%, rgba(96, 96, 96, 0.00) 108.33%)',
    title: 'Visual Design and Branding',
    content: 'Crafting visually appealing designs aligned with brand identity, selecting color schemes, typography, and imagery to enhance the user experience, and ensuring consistency across platforms for a seamless experience.'
  },
  {id: 3,
    icon: testing,
    background: 'linear-gradient(89deg, #055094 1.23%, rgba(5, 87, 162, 0.00) 105.11%)',
    title: 'Usability Testing and Iterative Design',
    content: 'Conducting usability testing, iteratively refining designs based on user feedback, and collaborating with stakeholders and development teams to implement design improvements.'
  },
 
]

export const Services:React.FunctionComponent = () => {
  return (
    <div className='md:mt-[15.25rem] border2 flex justify-center'>

      {/* <div className='border2 flex justify-end  border-red-500 md:w-[12.5%]'
      >
      <div className='border2 h-fit'>
      <img className='block sm:hidden' src={proudsmlf} alt="text" />
      <img className='hidden sm:block' src={proud} alt="text" />
          </div>
      </div> */}

      <div className='border2 border-pink-400 w-[100%] md:w-[75%] mxauto'>

       <div className='border2 border-red-500 flex items-center justify-center my-[44px] md:my-[55px] h-[400px]'>
        <div className='border2 h-full'>
        <img className='block mt-5 sm:hidden' src={proudsmlf} alt="text" />
      <img className='hidden sm:block' src=     {proud} alt="text" />
        </div>

         <div className='border2 flex sm:justify-center w-[95%] pr5 sm:pr-0'>
         <ServicesCard background={cardData[0].background} title={cardData[0].title} icon={cardData[0].icon} content={cardData[0].content}/>
         </div>
        </div>

        <div className='border-red-500 border2 flex flex-col pl-5 gap-[5rem] sm:items-center lg:flex-row justify-center my-[44px] md:my-[65px] md:gap-[6rem]'>
          <ServicesCard background={cardData[1].background} title={cardData[1].title} icon={cardData[1].icon} content={cardData[1].content}/>
          <ServicesCard background={cardData[2].background} title={cardData[2].title} icon={cardData[2].icon} content={cardData[2].content}/>
        </div>

        <div className='border2 border-red-500 flex items-center justify-center my-[44px] md:my-[55px] gap-1 h-[400px]'>

         <div className='border2 flex  justify-center w-[95%] '>
         <ServicesCard background={cardData[3].background} title={cardData[3].title} icon={cardData[3].icon} content={cardData[3].content}/>
         </div>

         <div className='border2 h-full relative'>
         <img className='block mt-[220px] sm:hidden' src={proudrgsm} alt="text" />
      <img className='hidden mt-[125px] sm:block' src={proudrg} alt="text" />
          </div>
        </div>

      </div>

      {/* <div className='border2 flex flex-col justify-end  border-yellow-500 md:w-[12.5%] '>

      <div className='border2 justify-end w-fit'>
      <img className='block sm:hidden' src={proudrgsm} alt="text" />
      <img className='hidden sm:block' src={proudrg} alt="text" />
          </div>
          
      </div> */}

      </div>
  )
}
