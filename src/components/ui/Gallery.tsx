import work from '@/assets/work.png';
import wor from '@/assets/wor.png';
import kustbookletlg from '@/assets/kustbookletlg.png';
import kustbookletsm from '@/assets/kustbookletsm.png';
import alaportfoliolg from '@/assets/alaportfoliolg.png';
import alaportfoliosm from '@/assets/alaportfoliosm.png';
import bookbaylg from '@/assets/bookbaylg.png';
import bookbaysm from '@/assets/bookbaysm.png';
import pixellg from '@/assets/pixellg.png';
import pixelsm from '@/assets/pixelsm.png';
import live from '@/assets/live.png'
export const Gallery: React.FunctionComponent = () => {
    return (
        <div className="border-2 mt-[7.12rem] flex flex-col gap-[2.54rem] md:gap-[1.5rem]">

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <div>
                    <img src={kustbookletlg} alt="work" className="hidden md:block"/>
                    <div>
                        <div>
                            <h3>BookBay</h3>
                            <p>Ui/UX Designer</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
               <div>
                 <img src={kustbookletsm} alt="work" className="block md:hidden "/>
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