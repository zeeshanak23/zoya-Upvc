import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pricing = () => {
  const prices = [
    {
      plan: 'BASIC',
      rate: '49K',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      plan: 'BEGINNER',
      rate: '79K',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      plan: 'PREMIUM',
      rate: '109K',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      plan: 'ULTIMATE',
      rate: '149K',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];
  return (
    <section className='bg-gray-50 px-4 py-20 md:px-0'>
      <div className=' z-40 mx-auto my-0 max-w-[1200px]    ' id='price'>
        <p className='text-primary-600 w-full text-center text-xl font-bold md:text-2xl'>
          PRICING
        </p>
        <h1 className='w-full py-4 pb-16 text-center md:text-5xl'>
          Pricing & Packages
        </h1>
        <div className='grid grid-cols-1 items-center gap-5 py-4 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4'>
          {prices.map((price, i) => {
            return (
              <div key={i} className='rounded bg-white p-12 shadow-xl '>
                <div className='text-center text-xl font-[600]'>
                  {price.plan} PLAN
                </div>
                <div className='flex items-start justify-center gap-1 py-4'>
                  <FontAwesomeIcon
                    icon={faDollar}
                    className='black'
                    size='lg'
                  />
                  <div className='text-primary-600 text-6xl'>{price.rate}</div>
                </div>
                <p className='w-full py-6 text-center text-[15px] font-[600] leading-[2] text-gray-400'>
                  {price.description}
                </p>
                <div className='flex w-full items-center justify-center py-2'>
                  <button className='hover:bg-primary-600 border-primary-600 my-4 h-[50px] w-full  rounded border px-4 py-2 text-center text-[15px] font-[600] transition-all hover:text-white sm:w-[200px]'>
                    GET STARTED
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
