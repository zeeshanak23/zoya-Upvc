import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroBody = () => {
  return (
    <div className='relative   mx-auto my-0 max-w-[1200px] px-2'>
      <div className='md:pt-12'>
        <p className='pt-4 text-center text-xl font-[600] text-gray-200 sm:text-left'>
          WELCOME TO ZOYA ENTERPRISES
        </p>
        <h1 className='w-full flex-wrap pt-4  text-center capitalize leading-snug text-gray-200 sm:text-left md:w-[500px]  md:text-[40px] '>
          We provide UPVC window and doors to your dream home
        </h1>
        <p className='py-4 text-center uppercase leading-normal text-white sm:w-[600px] sm:text-left sm:text-[20px] md:text-[20px]'>
          transform your home instantly with premium upvc window and doors
        </p>
        <div className='mt-8 items-center sm:flex  sm:gap-[5px] sm:pt-0 '>
          <button className='bg-primary-600 mb-5 flex h-14  w-full items-center justify-center gap-2 rounded-[4px] font-bold uppercase text-white sm:mb-0 sm:hover:shadow-xl md:w-[250px] md:px-8  md:text-[15px]'>
            <span> GET Call now </span>{' '}
            <FontAwesomeIcon icon={faArrowRight} color='white' size='lg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBody;
