import React from "react";
// import { testimonyCards } from "@/testimonyCards"
import Marquee from "react-fast-marquee";
import { Testimonial } from "./Testimonial";
import ala from '@/assets/ala.png'
import sr from '@/assets/sr.png'

const cardData = [
  {
    id: 0,
    img: sr,
    name: "Engineer SM",
    role: "CEO Bookbay",
    quote: "He is an  asshole but a very good designer."
  },
  {
    id: 1,
    img: ala,
    name: "Muhammad Ala",
    role: "Software Engineer",
    quote: "Lorem ipsum dolor sit amet consectetur. Nec tortor cras or"
  }
]

export const Testimony: React.FunctionComponent = () => {
  return (
    <div className="relative flex flex-col justify-center border rounded-[17px] md:rounded-[36px] my-0 mx-auto parent w-[90%] md:w-[95%] h-[369px] md:h-[862px] mt-[159px] md:mt-[263px]">
      <h2 className="text-[22.61px] leading-[27.13px] text-[#F4F4F4] md:text-[40px] md:leading-[48px] text-center">Testimonies</h2>
      {/* Heading for the testimonials section. */}
      <div className="h-[80%] md:h-[70%] child w-[100vw] relative flex flex-col justify-center">
      <Marquee pauseOnHover={true} speed={30}>
       {cardData.map((card) => <Testimonial key={card.id} img={card.img} name={card.name} role={card.role} quote={card.quote} />)}
      </Marquee>
      </div>
    </div>
  );
}; 