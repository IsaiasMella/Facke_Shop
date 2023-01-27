import * as React from "react"
import { SVGProps } from "react"

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={32}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx={16.712} cy={16} rx={16.05} ry={16} fill="#535C67" />
    <g clipPath="url(#a)">
      <path
        d="M12.99 22.87H9.956v-9.913h3.168v9.913h-.132ZM11.54 11.652a1.898 1.898 0 0 1-1.296-.545 1.854 1.854 0 0 1-.552-1.28 1.768 1.768 0 0 1 .53-1.304A1.81 1.81 0 0 1 11.538 8a1.827 1.827 0 0 1 1.319.523 1.784 1.784 0 0 1 .529 1.303c-.054.466-.266.9-.601 1.232a2.109 2.109 0 0 1-1.247.595ZM24.738 22.87H21.57v-4.826c0-1.174 0-2.609-1.584-2.609s-1.848 1.304-1.848 2.609V23H14.97V12.957h3.036v1.304a3.203 3.203 0 0 1 1.233-1.179 3.252 3.252 0 0 1 1.67-.386c3.169 0 3.697 2.087 3.697 4.696v5.478h.131Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8.688 8)" d="M0 0h16.05v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Linkedin
