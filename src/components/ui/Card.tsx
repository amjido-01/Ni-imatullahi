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
    <main
      key={card.id}
      className={` bg-[#0F172D] w-[23.9375rem] h-[17.47263rem] md:h-[478px] md:w-[711px] rounded-[1.5rem] overflow-hidden border-2 
  `}>
    
        <div className="flex h-full gap-[3rem] md:gap-[4.56rem]">

          <div className="aside w-[4rem] h-full bullet border-2">
            <img
              src={card?.pic}
              alt="testimony pic"
              className="absolute md:w-[6.28488rem] h-[6.28488rem] top-[1.22rem] left-[0.66rem] md:top-[1.75rem] md:left-[0.88rem] z-10"
            />
          </div>


            <div className="body w-[15.69475rem] md:w-[22.45619rem] border-2 border-red-500">
              <p className="text-[#fff] poppins text-[0.78625rem] md:text-[1.125rem] style font-normal leading-[160%] capitalize">{card.content}</p>
            </div>
          </div>

    </main>
  );
}