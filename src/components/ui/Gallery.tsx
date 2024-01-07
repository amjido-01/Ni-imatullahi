import work from '@/assets/work.png';
import wor from '@/assets/wor.png'
export const Gallery: React.FunctionComponent = () => {
    return (
        <div className="border-2 mt-[7.12rem] flex flex-col gap-[1rem] md:gap-[1.5rem]">

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[1rem] md:gap-[1.5rem]">
            
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={work} alt="work" className=" hidden md:block"/>
                <img src={wor} alt="work" className="block md:hidden "/>
            </div>
            
             <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={work} alt="work" />
            </div>
           </div>

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[1rem] md:gap-[1.5rem]">
            <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={work} alt="work" />
            </div>
             <div className='w-[94%] gala md:w-[47.5%] rounded-[1.21875rem] md:rounded-[2.34669rem] overflow-hidden border2'>
                <img src={work} alt="work" />
            </div>
           </div>
        </div>
    )
}