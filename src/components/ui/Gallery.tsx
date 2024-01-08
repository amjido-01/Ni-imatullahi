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
        <div className="border-2 mt-[7.12rem] flex flex-col gap-[2.54rem] md:gap-[1.5rem]">

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <Project deskstopImg={kustbookletlg} mobileImage={kustbookletsm} liveIcon={live} />
            </div>
            
             <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <Project deskstopImg={alaportfoliolg} mobileImage={alaportfoliosm} liveIcon={live} />
            </div>
           </div>

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
               <Project deskstopImg={bookbaylg} mobileImage={bookbaysm} liveIcon={live} />
            </div>
             <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
               <Project deskstopImg={pixellg} mobileImage={pixelsm} liveIcon={live} />
            </div>
           </div>
        </div>
    )
}