import * as React from "react"
import { SVGProps } from "react"

const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={32}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx={16.837} cy={16} rx={16.05} ry={16} fill="#535C67" />
    <g clipPath="url(#a)">
      <path
        d="M24.662 12.8c-.2-1.3-.803-2.2-2.207-2.4-2.207-.4-5.617-.4-5.617-.4s-3.411 0-5.618.4c-1.404.2-2.107 1.1-2.207 2.4-.2 1.3-.2 3.2-.2 3.2s0 1.9.2 3.2c.2 1.3.803 2.2 2.207 2.4 2.207.4 5.617.4 5.617.4s3.411 0 5.618-.4c1.404-.3 2.006-1.1 2.207-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2Zm-9.83 6.2v-6l5.015 3-5.016 3Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8.813 8)" d="M0 0h16.05v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Youtube
