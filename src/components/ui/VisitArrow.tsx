import React from 'react';
import { motion } from 'framer-motion'
import { SVGProps } from "react";

type VisitArrowProps = SVGProps<SVGSVGElement> & {
  animateX: number[];
};

export const VisitArrow: React.FunctionComponent<VisitArrowProps> = ({ animateX = [-5, 10, -5],
  ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <motion.g
       initial={{ x: 0 }}
       animate={{ x: [-5, 10, -5]}}
       transition={{
         duration: 5,
         stiffness: 50,
         delay: 8,
         type: "keyframes",
         repeat: Infinity,
         ease: "easeInOut",
       }}
      >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7.906 5.313 6.188 6.187-6.188 6.188"
      />
    </motion.g>
  </svg>
)