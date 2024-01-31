import React from "react";
// the interface for the Card component expecting to receive a card object with id, title and url properties as props.
interface CardProps {
  card: {
    id: number;
     pic: string;
     name: string;
    alt: string;
    role: string;
    content: string
  }
}

export const Card: React.FunctionComponent<CardProps> = ({card}) => {
  // Render the card component
  return (
    <div
    key={card.id}
    className=" w-[711px] h-[222px] md:h-[450px] md:w-[700px] overflow-hidden border-2"
  >
    <div className="">
      <p className=" font-black uppercase text-white">
        {/* {card.content} */}
      </p>
    </div>
  </div>
  //   <main
  //     key={card.id}
  //     className={` bg-[#0F172D] w-[23.9375rem] h-[17.47263rem] md:h-[450px] md:w-800px] rounded-[1.5rem] overflow-hidden border-2 
  // `}>
    
  //       <div className="flex h-full gap[3rem] md:gap-[4.56rem]">

  //         <div className="aside h-full bullet border-2">
  //           <img
  //             src={card?.pic}
  //             alt="testimony pic"
  //             className="w-[70.876px] h-[70.876px] md:w-[161px] md:h-[161px] object-scale-down"
  //           />
  //         </div>


  //           <div className="body w-[15.69475rem] md:w-[22.45619rem] border-2 border-red-500 flex items-center">
  //             <div className="border-2">
  //             <h3>{card.name}</h3>
  //             <span>{card.role}</span>
  //             <p className="text-[#fff] poppins text-[0.78625rem] md:text-[1.125rem] style font-normal leading-[160%] capitalize">{card.content}</p>
  //             </div>
  //           </div>
  //         </div>

  //   </main>
  );
}