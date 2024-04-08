import { FC } from 'react';

const Bussiness: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      fill='#24ccb8'
      width='80px'
      height='100px'
      viewBox='0 0 32 32'
      version='1.1'
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
        <title>windows</title>{' '}
        <path d='M0 26.016q0 2.496 1.76 4.256t4.256 1.76h13.984q2.496 0 4.256-1.76t1.76-4.256v-14.016q0-2.464-1.76-4.224t-4.256-1.76h-13.984q-2.496 0-4.256 1.76t-1.76 4.224v14.016zM4 26.016v-8h18.016v8q0 0.832-0.608 1.408t-1.408 0.576h-13.984q-0.832 0-1.44-0.576t-0.576-1.408zM4 16v-4q0-0.832 0.576-1.408t1.44-0.576h13.984q0.832 0 1.408 0.576t0.608 1.408v4h-18.016zM6.016 14.016h1.984v-2.016h-1.984v2.016zM6.368 4h15.648q2.464 0 4.224 1.76t1.76 4.256v15.648q1.76-0.64 2.88-2.176t1.12-3.488v-13.984q0-2.496-1.76-4.256t-4.224-1.76h-14.016q-1.92 0-3.456 1.12t-2.176 2.88zM10.016 14.016h1.984v-2.016h-1.984v2.016zM14.016 14.016h5.984v-2.016h-5.984v2.016z' />{' '}
      </g>
    </svg>
  );
};
export default Bussiness;
