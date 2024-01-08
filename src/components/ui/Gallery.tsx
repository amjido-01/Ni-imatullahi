import live from '@/assets/live.png';
import kustbookletlg from '@/assets/kustbookletlg.png';
import kustbookletsm from '@/assets/kustbookletsm.png';
import alaportfoliolg from '@/assets/alaportfoliolg.png';
import alaportfoliosm from '@/assets/alaportfoliosm.png';
import bookbaylg from '@/assets/bookbaylg.png';
import bookbaysm from '@/assets/bookbaysm.png';
import pixellg from '@/assets/pixellg.png';
import pixelsm from '@/assets/pixelsm.png';
import { Project } from './Project';
export const Gallery: React.FunctionComponent = () => {
    return (
        <div className="mt-[7.44rem] md:mt-[7.13rem] flex flex-col gap-[2.54rem] md:gap-[1.5rem]">

           <div className="flex flex-col lg:flex-row justify-center items-center gap-[2.54rem] md:gap-[1.5rem]">
            
            <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
                <Project deskstopImg={kustbookletlg} mobileImage={kustbookletsm} liveIcon={live} projectName='KUSTBooklets' role='Frontend Developer, UI/UX designer' />
            </div>
            
             <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
                <Project deskstopImg={alaportfoliolg} mobileImage={alaportfoliosm} liveIcon={live} projectName='ala’s Portfolio' role='Product Designer' />
            </div>
           </div>

           <div className="flex flex-col lg:flex-row justify-center items-center gap-[2.54rem] md:gap-[1.5rem]">
            <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
               <Project deskstopImg={bookbaylg} mobileImage={bookbaysm} liveIcon={live} projectName='Bookbay' role='UI/UX designer' />
            </div>
             <div className='w-[94%] gala lg:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden'>
               <Project deskstopImg={pixellg} mobileImage={pixelsm} liveIcon={live} projectName='Sarco pixel' role='Product Designer'/>
            </div>
           </div>
        </div>
    )
}