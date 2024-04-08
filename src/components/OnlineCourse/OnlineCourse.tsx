import ArtDesign from '@/components/Icons/ArtDesign';
import Bussiness from '@/components/Icons/Bussiness';
import ComputerScience from '@/components/Icons/ComputerScience';
import Graphic from '@/components/Icons/Graphic';
import Health from '@/components/Icons/Health';
import History from '@/components/Icons/History';
import Information from '@/components/Icons/Information';
import Marketing from '@/components/Icons/Marketing';
import Music from '@/components/Icons/Music';
import SoftwareEngg from '@/components/Icons/SoftwareEngg';
import UiDesign from '@/components/Icons/UiDesign';
import Web from '@/components/Icons/Web';
import { FC } from 'react';

const OnlineCourse: FC = () => {
  const items = [
    {
      icon: <UiDesign className=' group-hover:fill-white' />,
      title: 'UI/UX Design Courses',
      duration: '15 Courses',
    },
    {
      icon: <ArtDesign className=' group-hover:fill-white' />,
      title: 'Art & Design',
      duration: '10 Courses',
    },
    {
      icon: <ComputerScience className=' group-hover:fill-white' />,
      title: 'Computer Design',
      duration: '8 Courses',
    },
    {
      icon: <History className=' group-hover:fill-white' />,

      title: 'History & Archeologic',
      duration: '12 Courses',
    },
    {
      icon: <SoftwareEngg className=' group-hover:fill-white' />,

      title: 'Software Engineering',
      duration: '22 Courses',
    },
    {
      icon: <Information className=' group-hover:fill-white' />,
      title: 'Information Software',
      duration: '18 Courses',
    },
    {
      icon: <Health className=' group-hover:fill-white' />,
      title: 'Health & Fitness',
      duration: '22 Courses',
    },
    {
      icon: <Marketing className=' group-hover:fill-white' />,
      title: 'Marketing',
      duration: '32 Courses',
    },
    {
      icon: <Graphic className=' group-hover:fill-white' />,
      title: 'Graphic Design',
      duration: '24 Courses',
    },
    {
      icon: <Music className=' group-hover:fill-white' />,
      title: 'Music',
      duration: '16 Courses',
    },
    {
      icon: <Bussiness className=' group-hover:fill-white' />,
      title: 'Bussiness Administration',
      duration: '12 Courses',
    },
    {
      icon: <Web className=' group-hover:fill-white' />,
      title: 'Web Management',
      duration: '18 Courses',
    },
  ];
  return (
    <>
      <section className='teal bg-gray-100 py-20' id='courses'>
        <div className='flex flex-col items-center justify-center  '>
          <h3 className=' text-primary-600 w-full text-center font-bold md:text-2xl'>
            COURSE
          </h3>
          <h1 className='mb-4 w-[300px] pb-[50px]  pt-6 text-center text-[35px] font-medium leading-tight md:w-[auto] md:text-[50px]'>
            Browse Our Online Courses
          </h1>
        </div>
        <div className=' m-auto grid grid-cols-1	 place-items-center md:w-[1100px]	 md:grid-cols-6 md:place-items-center'>
          {items.map((list, i) => {
            return (
              <div
                className='hover:bg-primary-400 group m-2  flex h-[200px] w-[97%] flex-col  items-center rounded bg-white  p-4 md:h-[250px] md:w-[170px]  '
                key={i}
              >
                <div className='hover:bg-primary-400 contents justify-center text-center  '>
                  <span className='mb-2 h-[70px] w-[70px] group-hover:fill-white'>
                    {list.icon}
                  </span>
                  <h4 className='mt-4 h-[40px] hover:text-white group-hover:text-white md:mb-[10px]'>
                    {list.title}
                  </h4>
                  <button className='text-primary-600 rounded bg-gray-50 p-1 font-[600] md:mt-4'>
                    {list.duration}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default OnlineCourse;
