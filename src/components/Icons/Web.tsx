import { FC } from 'react';

const Web: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      fill='#24ccb8'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 496 496'
      width='80px'
      height='100px'
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
        <g>
          {' '}
          <g>
            {' '}
            <g>
              {' '}
              <path d='M456,80h-48V68.688L339.312,0H88v80H40C17.944,80,0,97.944,0,120v288c0,22.056,17.944,40,40,40h104v32h-32v16h272v-16 h-32v-32h104c22.056,0,40-17.944,40-40V120C496,97.944,478.056,80,456,80z M344,27.312L380.688,64H344V27.312z M360,80v112H136 V48h192v32H360z M104,16h224v16H120v176h256V80h16v272H104V16z M336,480H160v-32h176V480z M480,408c0,13.232-10.768,24-24,24H40 c-13.232,0-24-10.768-24-24v-8h464V408z M480,384H16V120c0-13.232,10.768-24,24-24h48v272h320V96h48c13.232,0,24,10.768,24,24 V384z' />{' '}
              <path d='M248,64c-30.872,0-56,25.12-56,56s25.128,56,56,56s56-25.12,56-56S278.872,64,248,64z M248,160 c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40C288,142.056,270.056,160,248,160z' />{' '}
              <rect x='120' y='224' width='256' height='16' />{' '}
              <rect x='120' y='256' width='256' height='16' />{' '}
              <rect x='120' y='288' width='120' height='16' />{' '}
              <rect x='256' y='288' width='120' height='16' />{' '}
              <rect x='120' y='320' width='120' height='16' />{' '}
              <rect x='256' y='320' width='120' height='16' />{' '}
            </g>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};
export default Web;
