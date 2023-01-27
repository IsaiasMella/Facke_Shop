import * as React from "react"
import { SVGProps } from "react"

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={32}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx={16.337} cy={16} rx={16.05} ry={16} fill="#535C67" />
    <g clipPath="url(#a)">
      <path
        d="m14.354 24-.023-7h-3.01v-3h3.01v-2c0-2.7 1.677-4 4.092-4 1.157 0 2.152.086 2.442.124v2.821h-1.676c-1.313 0-1.568.623-1.568 1.536V14h3.732l-1.003 3h-2.729v7h-3.267Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8.313 8)" d="M0 0h16.05v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Facebook
