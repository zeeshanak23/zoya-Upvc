import { FC } from 'react';
import HeroBody from './HeroBody';
import HeroHeader from './HeroHeader';
import HeroTab from './HeroTab';

const Hero: FC<{ banner: string }> = ({ banner }) => {
  return (
    <section
      className='relative  inset-0 h-screen bg-fixed md:h-screen  '
      style={{
        backgroundImage: `url("${banner}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className=' absolute bottom-0   left-0 h-full w-full bg-[#1d1d20] bg-opacity-70 sm:bottom-0 '></div>

      <div className=' py-5'>
        <HeroHeader />
        <HeroTab />
        <HeroBody />
      </div>
    </section>
  );
};

export default Hero;
