import * as React from "react"
import { SVGProps } from "react"

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="square"
    >
      <path d="M1 23c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10M12 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default UserIcon
