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
import researchlg from '@/assets/researchlg.svg'
import visualDesignlg from '@/assets/visualDesignlg.svg'
import testinglg from '@/assets/testinglg.svg';
import prototypinglg from '@/assets/prototypinglg.svg'
const cardData = [
  {id: 0,
    borderColor: '#19B3A7',
    largeIcon: researchlg,
    icon: research,
    title: 'User Research and Analysis',
    content: 'Conducting in-depth user research, analyzing data for actionable insights, and creating user personas and journey maps to enhance the user experience'
  },
  {id: 1,
    borderColor: '#C11A0B',
    largeIcon: prototypinglg,
    icon: prototyping,
    title: 'Prototyping and Wireframing',
    content: 'Creating interactive prototypes and wireframes, refining through iterative testing for user feedback, and delivering a clear roadmap to clients and development teams for the final product.'
  },
  {id: 2,
    borderColor: '#CC9F00',
    largeIcon: visualDesignlg,
    icon: visualDesign,
    title: 'Visual Design and Branding',
    content: 'Crafting visually appealing designs aligned with brand identity, selecting color schemes, typography, and imagery to enhance the user experience, and ensuring consistency across platforms for a seamless experience.'
  },
  {id: 3,
    borderColor: '#056BC7',
    largeIcon: testinglg,
    icon: testing,
    title: 'Usability Testing and Iterative Design',
    content: 'Conducting usability testing, iteratively refining designs based on user feedback, and collaborating with stakeholders and development teams to implement design improvements.'
  },
 
]

export const Services:React.FunctionComponent = () => {
  return (
    <div className='mt-[8rem] border2 flex justify-center service'>

      {/* <div className='border2 flex justify-end  border-red-500 md:w-[12.5%]'
      >
      <div className='border2 h-fit'>
      <img className='block sm:hidden' src={proudsmlf} alt="text" />
      <img className='hidden sm:block' src={proud} alt="text" />
          </div>
      </div> */}

      <div className='border2 border-pink-400 w-[100%] md:w-[75%] mxauto'>

       <div className='border2 border-red-500 flex items-center justify-center mt-[44px] mb-4 md:my-[55px] h-[400px]'>
        <div className='h-full'>
        <img className='block mt-16 sm:hidden' src={proudsmlf} alt="text" />
        <img className='hidden sm:block mt-10' src={proud} alt="text" />
        </div>

         <div className='border2 flex sm:justify-center w-[95%] pr5 sm:pr-0'>
         <ServicesCard borderColor={cardData[0].borderColor} title={cardData[0].title} largeIcon={cardData[0].largeIcon} icon={cardData[0].icon} content={cardData[0].content}/>
         </div>
        </div>

        <div className='border-red-500 border2 flex flex-col pl-5 gap-[5rem] sm:items-center lg:flex-row justify-center mb-[44px] md:my-[8rem] md:gap-[10rem]'>
          <ServicesCard borderColor={cardData[1].borderColor} title={cardData[1].title} largeIcon={cardData[1].largeIcon} icon={cardData[1].icon} content={cardData[1].content}/>
          <ServicesCard largeIcon={cardData[2].largeIcon}  borderColor={cardData[2].borderColor} title={cardData[2].title} icon={cardData[2].icon} content={cardData[2].content}/>
        </div>

        <div className='border2 border-red-500 flex items-center justify-center my-[44px] md:my-4 gap-1 h-[400px]'>

         <div className='border2 flex  justify-center w-[95%] '>
         <ServicesCard largeIcon={cardData[3].largeIcon}  borderColor={cardData[3].borderColor} title={cardData[3].title} icon={cardData[3].icon} content={cardData[3].content}/>
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
