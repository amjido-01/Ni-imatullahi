import { SVGProps } from "react"
export const HeroBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={1512}
    height={999}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        fillOpacity={0.1}
        d="M0 0h1512v999H0z"
        style={{ mixBlendMode: "darken" }}
      />
      <path fill="url(#c)" d="M0 0h1512v999H0z" opacity={0.1} />
      <g filter="url(#d)">
        <circle
          cx={-52.5}
          cy={1045.5}
          r={187.5}
          fill="#fff"
          fillOpacity={0.3}
        />
      </g>
      <g filter="url(#e)">
        <circle cx={1418.5} cy={18.5} r={218.5} fill="#fff" fillOpacity={0.5} />
      </g>
    </g>
    <defs>
      <pattern
        id="b"
        width={0.841}
        height={1.273}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#f" transform="scale(.00082 .00124)" />
      </pattern>
      <pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#g" transform="matrix(.00098 0 0 .00148 0 -.257)" />
      </pattern>
      <filter
        id="d"
        width={1495}
        height={1495}
        x={-800}
        y={298}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_964_620"
          stdDeviation={280}
        />
      </filter>
      <filter
        id="e"
        width={1437}
        height={1437}
        x={700}
        y={-700}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_964_620"
          stdDeviation={250}
        />
      </filter>
      <image
        id="f"
        width={1024}
        height={1024}
      />
      <image
        id="g"
        width={1023}
        height={1023}
      />
      <clipPath id="a">
        <path fill="#fff" d="M0 0h1512v999H0z" />
      </clipPath>
    </defs>
  </svg>
)