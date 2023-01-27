import { SVGProps } from "react"

const ShoppingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="#091625" d="M0 0h24v24H0z" />
        <path
            d="M19.734 23H4.266a2 2 0 0 1-1.985-2.248L4 7h16l1.719 13.752A2 2 0 0 1 19.734 23Z"
            stroke="#fff"
            strokeWidth={2}
            strokeMiterlimit={20}
            strokeLinecap="square"
        />
        <path
            d="M8 10V5a4.013 4.013 0 0 1 4-4v0a4.013 4.013 0 0 1 4 4v5"
            stroke="#fff"
            strokeWidth={2}
            strokeMiterlimit={20}
            strokeLinecap="square"
        />
    </svg>
)

export default ShoppingIcon
