import { FC } from 'react';

const Music: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width='80px'
      height='100px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0' />

      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      />

      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z'
          stroke='#24ccb8'
          stroke-width='1.5'
        />{' '}
        <path
          d='M12 17C12 17.8284 11.3284 18.5 10.5 18.5C9.67157 18.5 9 17.8284 9 17C9 16.1716 9.67157 15.5 10.5 15.5C11.3284 15.5 12 16.1716 12 17ZM12 17V10.5C12 12.1569 13.8954 13.5 15 13.5'
          stroke='#24ccb8'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />{' '}
        <path
          d='M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7'
          stroke='#24ccb8'
          stroke-width='1.5'
        />{' '}
        <path
          d='M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5'
          stroke='#24ccb8'
          stroke-width='1.5'
        />{' '}
      </g>
    </svg>
  );
};
export default Music;
