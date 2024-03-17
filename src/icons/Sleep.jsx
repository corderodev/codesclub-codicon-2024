export const Sleep = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-zzz ${className}`}
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 12h6l-6 8h6' />
      <path d='M14 4h6l-6 8h6' />
    </svg>
  )
}
