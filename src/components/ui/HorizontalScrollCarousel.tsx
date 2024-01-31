import React from "react";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Card } from "@/components/ui/Card";

// The interface for the HorizontalScrollCarousel component as expected to be passed to it as props.
interface CarouselProps {
  cards: {
    id: number;
    title: string;
    name: string;
    pic: string;
    content: string;
    role: string;
    alt: string
  }[];
}


export const HorizontalScrollCarousel: React.FunctionComponent<CarouselProps> = ({ cards }) => {
  // Create a reference to the main container element.
  const targetRef = useRef(null);
  // Use the useScroll hook to track scroll progress on the container.
  const { scrollYProgress } = useScroll({ target: targetRef });
  // Use the useTransform hook to map the scroll progress to a CSS transform value.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  

  // Render the cards in a flex container with horizontal scrolling overflow.
  return (
    <main
      ref={targetRef}
      className="testimon relative h-[150vh] md:h-[200vh] border-red-500"
    >
      {/** The sticky container element. */}
      <div className="sticky top-0 flex items-center h-screen justify-between overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[21px] md:gap-8">
          {/* Render the cards in a carousel component. */}
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};
