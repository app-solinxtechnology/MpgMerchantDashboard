
const Check:React.FC<ISvgProps> = ({...rest}) => {
  return (
    <svg
    {...rest}
    viewBox="0 0 32 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={32} height={29} rx={6} fill="black" />
    <path
      d="M4 14C6.761 14.575 10.312 15.688 13 17.438C16.157 13.208 21.828 9.251 28 6C22.139 11.775 17.289 18.328 14 24.917C11.349 21.151 8.453 17.646 4 14Z"
      fill="white"
    />
  </svg>
  
  )
}

export default Check
