import WeDoBody from '@/components/WeDo/Body/page';
import { FC } from 'react';

const WeDo: FC<{ banner: string }> = ({ banner }) => {
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
        <WeDoBody />
      </div>
    </section>
  );
};
export default WeDo;
