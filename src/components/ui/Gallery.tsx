import live from '@/assets/live.png';
import kustbookletlg from '@/assets/kustbookletlg.png';
import kustbookletsm from '@/assets/kustbookletsm.png';
import alaportfoliolg from '@/assets/alaportfoliolg.png';
import alaportfoliosm from '@/assets/alaportfoliosm.png';
import bookbaylg from '@/assets/bookbaylg.png';
import bookbaysm from '@/assets/bookbaysm.png';
import pixellg from '@/assets/pixellg.png';
import pixelsm from '@/assets/pixelsm.png';
export const Gallery: React.FunctionComponent = () => {
    return (
        <div className="border-2 mt-[7.12rem] flex flex-col gap-[2.54rem] md:gap-[1.5rem]">

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <div className='relative'>
                    <img src={kustbookletlg} alt="work" className="hidden image md:block"/>
                   <img src={kustbookletsm} alt="work" className="block image md:hidden "/>
                   
                   <div className='flex items-center justify-center'>
                         <div className='absolute flex border-red-500 border-2 rder-2 md:bottom-[1.84rem] w-[70%] justify-around'>
                    <div className='border-2 text-[#ffffff]'>
                        <h3>KUSTBooklets</h3>
                        <p>Frontend Developer, UI/UX designer</p>
                    </div>
                    <div>
                        <img src={live} className='md:w-[3.78594rem] md:h-[3.78594rem]' alt="live" />
                    </div>
                   </div>
                   </div>
                  
                </div>
            </div>
            
             <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={alaportfoliolg} className="hidden md:block" alt="work" />
                <img src={alaportfoliosm} className='block md:hidden' alt="work" />
            </div>
           </div>

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={bookbaylg} className='hidden md:block' alt="work" />
                <img src={bookbaysm} className='block md:hidden' alt="work" />
            </div>
             <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={pixellg} className='hidden md:block' alt="work" />
                <img src={pixelsm} className='block md:hidden' alt="work" />
            </div>
           </div>
        </div>
    )
}