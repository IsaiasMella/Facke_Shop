import { SVGProps } from "react"

const Phone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.42 10.4-3.146-1.392a1.551 1.551 0 0 0-1.83.442l-.95 1.185A12.446 12.446 0 0 1 5.67 6.823l1.188-.946a1.54 1.54 0 0 0 .445-1.826L5.905.914A1.541 1.541 0 0 0 4.106.049l-2.66.689A1.55 1.55 0 0 0 .303 2.444a15.958 15.958 0 0 0 4.53 9.024 16.044 16.044 0 0 0 9.054 4.517 1.552 1.552 0 0 0 1.71-1.139l.69-2.653a1.528 1.528 0 0 0-.866-1.793Z"
      fill="#091625"
    />
  </svg>
)

export default Phone
