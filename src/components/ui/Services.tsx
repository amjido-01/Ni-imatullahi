import React from 'react';
import { ServicesCard } from './ServicesCard';
import research from '@/assets/research.svg'
import prototyping from '@/assets/prototyping.svg';
import testing from '@/assets/testing.svg';
import visualDesign from '@/assets/visualDesign.svg'
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
    <div className='md:mt-[15.25rem] border-2'>
      <div className='border-2 w-[95%] md:w-[80%] mx-auto'>

        <div className='border-red-500 border-2 flex md:gap[16.09rem] items-center justifycenter my-[5rem]'>

          <div className='border-2 trans w[10%]'>
            <p className='text-[#F4F4F4] text-[0.625rem] md:text-[1rem] style font-black uppercase leading-[120%]'>Services i proudly offer</p>
            <span className='bar mb-[0.25rem] h-[0.125rem] md:h-[0.25rem]' 
            style={{ backgroundColor:  "white" }}>
        </span>
          </div>

          <div className='border-2 w[90%] w-full flex justify-center'>
          <ServicesCard background={cardData[0].background} title={cardData[0].title} icon={cardData[0].icon} content={cardData[0].content}/>
          </div>

        </div>

        <div className='border-red-500 border-2 flex flex-col gap-[5rem] items-center md:flex-row justify-center md:my-[8.75rem] md:gap-[5rem]'>
          <ServicesCard background={cardData[1].background} title={cardData[1].title} icon={cardData[1].icon} content={cardData[1].content}/>
          <ServicesCard background={cardData[2].background} title={cardData[2].title} icon={cardData[2].icon} content={cardData[2].content}/>
        </div>

        <div className='border-red-500 border-2 flex items-center justify-center my-[5rem] '>
          <ServicesCard background={cardData[3].background} title={cardData[3].title} icon={cardData[3].icon} content={cardData[3].content}/>
        </div>
      </div>
      </div>
  )
}
