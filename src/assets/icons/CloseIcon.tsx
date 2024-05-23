import { Dispatch, SetStateAction } from "react";

interface CloseIconProps{
  color: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const CloseIcon = ({color,setIsVisible}:CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
      onClick={()=>setIsVisible(false)}
    >
      <g fill={color} clipPath="url(#clip0_2787_1199)">
        <path d="M11.226 5.517a.143.143 0 00-.143-.143l-1.179.005L8.13 7.495 6.356 5.381l-1.18-.006a.142.142 0 00-.143.143c0 .034.012.066.034.093L7.39 8.38l-2.323 2.766a.143.143 0 00.109.236l1.18-.005 1.773-2.117 1.773 2.115 1.179.005a.142.142 0 00.143-.143.148.148 0 00-.034-.093L8.87 8.377l2.323-2.768a.143.143 0 00.033-.092z"></path>
        <path d="M8.129.342a8 8 0 10.001 16 8 8 0 00-.001-16zm0 14.642a6.644 6.644 0 010-13.285 6.644 6.644 0 010 13.285z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2787_1199">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(.129 .342)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CloseIcon;
