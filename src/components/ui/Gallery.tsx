import work from '@/assets/work.png'
export const Gallery: React.FunctionComponent = () => {
    return (
        <div className="border-2 mt-[7.12rem] flex flex-col gap-[2.54rem] md:gap-[1.5rem]">
           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            <div className='w-[90%] md:w-[45%] md:h-[35.2rem]'>
                <img src={work} alt="work" />
            </div>
             <div className='w-[90%] md:w-[45%] md:h-[35.2rem]'>
                <img src={work} alt="work" />
            </div>
           </div>

           <div className="flex flex-col md:flex-row justify-center items-center border-2 gap-[2.54rem] md:gap-[1.5rem]">
            <div className='w-[90%] md:w-[45%] md:h-[35.2rem]'>
                <img src={work} alt="work" />
            </div>
             <div className='w-[90%] md:w-[45%] md:h-[35.2rem]'>
                <img src={work} alt="work" />
            </div>
           </div>

          
        </div>
    )
}