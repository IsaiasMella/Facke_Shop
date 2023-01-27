import * as React from "react"
import { SVGProps } from "react"

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={32}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"

  >
    <ellipse cx={16.587} cy={16} rx={16.05} ry={16} fill="#535C67" />
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.587 9.441c2.143 0 2.397.009 3.244.047.508.006 1.012.1 1.49.276.348.128.663.334.922.6.267.258.473.572.602.92.177.475.27.978.277 1.485.038.844.047 1.1.047 3.233s-.009 2.389-.047 3.233c-.006.507-.1 1.01-.277 1.485a2.643 2.643 0 0 1-1.523 1.518c-.477.177-.98.27-1.49.276-.846.038-1.103.047-3.242.047-2.14 0-2.397-.009-3.244-.047a4.445 4.445 0 0 1-1.49-.276 2.48 2.48 0 0 1-.922-.6 2.471 2.471 0 0 1-.602-.92 4.406 4.406 0 0 1-.277-1.485c-.038-.844-.047-1.1-.047-3.233s.009-2.389.047-3.233c.006-.507.1-1.01.277-1.485.129-.348.335-.662.602-.92a2.48 2.48 0 0 1 .923-.6c.477-.177.98-.27 1.49-.276.846-.038 1.103-.047 3.243-.047l-.003.002Zm0-1.441c-2.18 0-2.452.009-3.31.048a5.903 5.903 0 0 0-1.946.372c-.536.2-1.02.516-1.421.923-.409.4-.725.883-.926 1.417a5.852 5.852 0 0 0-.373 1.94c-.04.855-.049 1.127-.049 3.3s.01 2.445.049 3.3c.013.663.14 1.319.373 1.94.201.534.517 1.018.926 1.417.4.407.885.722 1.421.923a5.903 5.903 0 0 0 1.948.372c.856.039 1.129.048 3.308.048 2.18 0 2.453-.009 3.31-.048a5.903 5.903 0 0 0 1.949-.372 4.108 4.108 0 0 0 2.347-2.34c.234-.622.36-1.278.373-1.942.04-.853.049-1.125.049-3.3s-.01-2.445-.049-3.3a5.852 5.852 0 0 0-.375-1.938 3.907 3.907 0 0 0-.926-1.417 3.92 3.92 0 0 0-1.421-.923 5.903 5.903 0 0 0-1.946-.372C19.04 8.009 18.768 8 16.588 8Zm0 3.892a4.13 4.13 0 0 0-2.289.692 4.096 4.096 0 0 0-.624 6.32 4.125 4.125 0 0 0 4.49.891 4.118 4.118 0 0 0 1.85-1.513 4.1 4.1 0 0 0-1.85-6.077 4.132 4.132 0 0 0-1.577-.313Zm0 6.775a2.681 2.681 0 0 1-2.471-1.646 2.66 2.66 0 0 1 .58-2.907 2.68 2.68 0 0 1 4.116.404 2.66 2.66 0 0 1-.333 3.368 2.68 2.68 0 0 1-1.892.781Zm5.247-6.937c0 .53-.431.96-.963.96a.962.962 0 0 1-.963-.96c0-.53.431-.96.963-.96s.963.43.963.96Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8.563 8)" d="M0 0h16.05v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Instagram
