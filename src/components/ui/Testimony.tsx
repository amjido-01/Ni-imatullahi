import React from "react";
import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScrollCarousel";
import { testimonyCards } from "@/testimonyCards"

export const Testimony: React.FunctionComponent = () => {
  // Render the testimonial cards in a carousel component.
  return (
    <div className="mt-[2.94rem] md:mt-[6.88rem] border-2">
      {/* Heading for the testimonials section. */}
      <div>
        { /* horizontal scroll carousel component that displays testimonial cards and receives props from testimonyData.ts */ }
        <HorizontalScrollCarousel cards={testimonyCards} />
      </div>
    </div>
  );
};