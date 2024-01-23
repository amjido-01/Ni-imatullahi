import React from 'react';
import { ServicesCard } from './ServicesCard';
import research from '@/assets/research.svg'
import prototyping from '@/assets/prototyping.svg';
import testing from '@/assets/testing.svg';
import visual from '@/assets/visual.svg'
const cardData = [
  {id: 0,
    icon: research,
    background: 'linear-gradient(90deg, #0F8A80 0%, #0B8E3C 100%)',
    title: 'User Research and Analysis',
    content: 'Conducting in-depth user research, analyzing data for actionable insights, and creating user personas and journey maps to enhance the user experience'
  },
  {id: 1,
    background: '#93451B',
    icon: prototyping,
    title: 'Prototyping and Wireframing',
    content: 'Creating interactive prototypes and wireframes, refining through iterative testing for user feedback, and delivering a clear roadmap to clients and development teams for the final product.'
  },
  {id: 2,
    icon: research,
    background: '#606060',
    title: 'Visual Design and Branding',
    content: 'Crafting visually appealing designs aligned with brand identity, selecting color schemes, typography, and imagery to enhance the user experience, and ensuring consistency across platforms for a seamless experience.'
  },
  {id: 3,
    icon: research,
    background: '#0557A2',
    title: 'Usability Testing and Iterative Design',
    content: 'Conducting usability testing, iteratively refining designs based on user feedback, and collaborating with stakeholders and development teams to implement design improvements.'
  },
 
]

export const Services:React.FunctionComponent = () => {
  return (
    <div className='md:mt-[15.25rem] border-2'>
      <div className='border-2 w-[95%] md:w-[80%] mx-auto'>

        <div className='border-red-500 border-2 flex items-center justify-center'>
          <ServicesCard background={cardData[0].background} title={cardData[0].title} icon={cardData[0].icon} content={cardData[0].content}/>
        </div>

        <div className='border-red-500 border-2 flex flex-col md:flex-row justify-center md:my-[8.75rem] md:gap-[5rem]'>
          <ServicesCard background={cardData[1].background} title={cardData[1].title} icon={cardData[1].icon} content={cardData[1].content}/>
          <ServicesCard background={cardData[2].background} title={cardData[2].title} icon={cardData[2].icon} content={cardData[2].content}/>
        </div>

        <div className='border-red-500 border-2 flex items-center justify-center'>
          <ServicesCard background={cardData[3].background} title={cardData[3].title} icon={cardData[3].icon} content={cardData[3].content}/>
        </div>
      </div>
      </div>
  )
}
