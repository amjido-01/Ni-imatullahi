import React from 'react';
import { ServicesCard } from './ServicesCard';
import research from '@/assets/research.svg'
import rLg from '@/assets/rLg.svg'
import prototype from '@/assets/prototype.svg'
import prototypeLg from '@/assets/prototypeLg.svg'
;import test from '@/assets/test.svg';
import testLg from '@/assets/testLg.svg'
import visualBrand from '@/assets/visualBrand.svg';
import proud from '@/assets/proud.svg'
import proudsmlf from '@/assets/proudsmlf.svg'
import proudrg from '@/assets/proudrg.svg'
import proudrgsm from '@/assets/proudrgsm.svg';
import visualBrandLg from '@/assets/visualBrandLg.svg'

const cardData = [
  {id: 0,
    icon: research,

    desktopIcon: rLg,
    title: 'User Research and Analysis',
    content: 'Conducting in-depth user research, analyzing data for actionable insights, and creating user personas and journey maps to enhance the user experience'
  },
  {id: 1,
    icon: prototype,
    desktopIcon: prototypeLg,
    title: 'Prototyping and Wireframing',
    content: 'Creating interactive prototypes and wireframes, refining through iterative testing for user feedback, and delivering a clear roadmap to clients and development teams for the final product.'
  },
  {id: 2,
    icon: visualBrand,
    desktopIcon: visualBrandLg,
    title: 'Visual Design and Branding',
    content: 'Crafting visually appealing designs aligned with brand identity, selecting color schemes, typography, and imagery to enhance the user experience, and ensuring consistency across platforms for a seamless experience.'
  },
  {id: 3,
    icon: test,
    desktopIcon: testLg,
    title: 'Usability Testing and Iterative Design',
    content: 'Conducting usability testing, iteratively refining designs based on user feedback, and collaborating with stakeholders and development teams to implement design improvements.'
  },
 
]

export const Services:React.FunctionComponent = () => {
  return (
    <div className='mt-[8rem] border2 flex justify-center service'>

      <div className='border2 w-[100%] md:w-[75%] mxauto'>

       <div className='border2 flex items-center justify-center mt-[44px] mb-4 md:my-[55px] h-[400px]'>
        <div className='h-full'>
        <img className='block mr-4 mt-20 sm:hidden' src={proudsmlf} alt="text" />
        <img className='hidden sm:block mt-10' src={proud} alt="text" />
        </div>

         <div className='border2 flex sm:justify-center w-[95%] pr5 sm:pr-0'>
         <ServicesCard 
         borderClr='#19B3A780'
        //  bg='linear-gradient(160deg, #FFFFFF00, #30958D)' 
         containerSize='w-[95%]'  title={cardData[0].title}  icon={cardData[0].icon} desktopIcon={cardData[0].desktopIcon} content={cardData[0].content}/>
         </div>
        </div>

        <div className='border2 flex flex-col m-l5 gap-[5rem] items-center lg:flex-row justify-center mb-[44px] md:my-[8rem] md:gap-[10rem]'>
          <ServicesCard 
          borderClr='#19B3A780'
          // bg='linear-gradient(160deg, #FFFFFF00, #8B1D13)' 
          containerSize='w-[90%]' title={cardData[1].title}  icon={cardData[1].icon} desktopIcon={cardData[1].desktopIcon} content={cardData[1].content}/>
          <ServicesCard 
          borderClr='#19B3A780'
          // bg="linear-gradient(160deg, #FFFFFF00, #FFC700)" 
          containerSize='w-[90%]' title={cardData[2].title} icon={cardData[2].icon} desktopIcon={cardData[2].desktopIcon} content={cardData[2].content}/>
        </div>

        <div className='border2 flex items-center justify-center my-[44px] md:my-4 gap-1 h-[400px]'>

         <div className='border2 flex justify-end sm:justify-center w-[95%] '>
         <ServicesCard 
         borderClr='#19B3A780'
        //  bg="linear-gradient(160deg, #FFFFFF00, #056BC7)" 
         containerSize='w-[95%]' title={cardData[3].title} icon={cardData[3].icon} desktopIcon={cardData[3].desktopIcon} content={cardData[3].content}/>
         </div>

         <div className='border2 h-full relative'>
         <img className='block mt-[200px] sm:mt-[220px] ml-2 sm:hidden' src={proudrgsm} alt="text" />
         <img className='hidden mt-[155px] sm:block' src={proudrg} alt="text" />
          </div>
        </div>

      </div>

      </div>
  )
}
