import * as React from "react"
import { SVGProps } from "react"

const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={32}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx={16.462} cy={16} rx={16.05} ry={16} fill="#535C67" />
    <g clipPath="url(#a)">
      <path
        d="M24.488 11.5c-.602.3-1.204.4-1.906.5.702-.4 1.203-1 1.404-1.8-.602.4-1.304.6-2.107.8-.602-.6-1.504-1-2.407-1-1.705 0-3.21 1.5-3.21 3.3 0 .3 0 .5.1.7-2.708-.1-5.216-1.4-6.821-3.4-.301.5-.401 1-.401 1.7 0 1.1.602 2.1 1.504 2.7-.501 0-1.003-.2-1.504-.4 0 1.6 1.103 2.9 2.608 3.2-.301.1-.602.1-.903.1-.2 0-.401 0-.602-.1a3.249 3.249 0 0 0 3.11 2.3c-1.104.9-2.508 1.4-4.113 1.4h-.803c1.505.9 3.21 1.5 5.016 1.5 6.019 0 9.33-5 9.33-9.3v-.4c.701-.5 1.303-1.1 1.704-1.8Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8.438 8)" d="M0 0h16.05v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Twitter
