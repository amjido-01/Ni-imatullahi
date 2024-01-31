import React from "react";
import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScrollCarousel";
import { testimonyCards } from "@/testimonyCards"

export const Testimony: React.FunctionComponent = () => {
  // Render the testimonial cards in a carousel component.
  return (
    <div className="border-green-500 ">
      {/* Heading for the testimonials section. */}
      <div className="border-2 w-full md:w-[90%] mx-auto">
        <HorizontalScrollCarousel cards={testimonyCards} />
      </div>
    </div>
  );
};