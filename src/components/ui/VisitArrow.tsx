import { SVGProps } from "react"
export const VisitArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}
  >
    {/* common */}
    <path
      // stroke="#F4F4F4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m7.906 5.313 6.188 6.187-6.188 6.188"
    />
  </svg>
)