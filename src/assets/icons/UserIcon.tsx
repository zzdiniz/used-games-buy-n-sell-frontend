
const UserIcon = (props?:any) =>{
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2787_1815)">
        <path
          d="M6.5 6a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1h-10s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.002-.246-.155-.986-.832-1.664C10.016 8.68 8.788 8 6.5 8c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
          fill="#23A6F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_2787_1815">
          <path fill="#fff" transform="translate(.5)" d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UserIcon
