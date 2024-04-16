import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarDays,
  faChalkboardUser,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import Certificate from '../Icons/Certificate';
import Expert from '@/components/Icons/Expert';
import Book from '@/components/Icons/Book';
const OnlineLearingBenefits = () => {
  return (
    <>
      <section
        className='teal bg-gray-100 px-4 py-20 md:mb-0 md:px-0 md:py-0'
        id='about'
      >
        <div className='m-auto flex max-w-[1200px] flex-col-reverse items-center justify-between md:flex-row '>
          <div>
            <img
              className='hidden h-auto w-auto object-cover md:inline md:h-[800px] md:w-[550px] md:object-cover'
              src='/images/upvcGlass.jpg'
              alt='testing-image'
            />
          </div>
          <div className='max-w-[500px] '>
            {/* <h3 className=' text-primary-600 px-8 text-center uppercase md:px-0 '>
              Learn Anything
            </h3> */}
            <h1 className='pt-3 text-center  text-[25px] font-medium leading-tight md:text-[40px]'>
              Creative and Modern Design
            </h1>
            <div className='flex flex-col gap-y-4 '>
              <div className=' md:items-centre hover:bg-primary-600 md:items-flex-start  group mt-3 flex cursor-pointer rounded bg-white p-4 transition-all hover:text-white md:flex  md:justify-between md:hover:text-white'>
                <div className='mr-[20px] mt-2 '>
                  <Book className='group-hover:fill-white' />
                </div>
                <div>
                  <h3 className='mb-[10px] font-medium group-hover:text-white md:text-[20px]'>
                    Online Courses
                  </h3>
                  <p className='font-small text-[18px] leading-6 text-gray-400 group-hover:text-white'>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts
                  </p>
                </div>
              </div>

              <div className='w=[100px] md:items-centre hover:bg-primary-600 group mt-0 flex cursor-pointer rounded bg-white p-4 transition-all  hover:text-white md:mt-2 md:flex md:justify-between'>
                <div className='mr-[20px] mt-2 '>
                  <Certificate className='group-hover:fill-white' />
                </div>
                <div>
                  <h3 className='mb-[10px] font-medium md:text-[20px]'>
                    Earn A Certificates
                  </h3>
                  <p className='font-small text-[18px] leading-6 text-gray-400 group-hover:text-white'>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className='w=[100px] md:items-centre hover:bg-primary-600 group mt-0 flex cursor-pointer rounded bg-white p-4 transition-all hover:text-white md:mt-2  md:flex md:justify-between'>
                <div className='mr-[20px] mt-2 '>
                  <Expert className='group-hover:fill-white' />
                </div>

                <div>
                  <h3 className='mb-[10px] font-medium md:text-[20px]'>
                    Learn with Expert
                  </h3>
                  <p className='font-small text-[18px]  leading-6 text-gray-400 group-hover:text-white'>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='h-[400px] py-1 text-gray-300 md:h-[250px] md:w-full   '
          style={{
            backgroundImage: `url('images/online-course-bg.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className='relative m-auto ml-10 flex flex-col justify-between gap-5 pb-10 pt-10 text-white md:m-auto md:mt-20 md:max-w-[1200px] md:flex-row md:pt-0  '>
            <div className='justify-centre flex'>
              <FontAwesomeIcon icon={faUser} className='m-2' size='3x' />
              <div>
                <h1>3,000</h1>
                <h4>Success stories</h4>
              </div>
            </div>
            <div className='flex'>
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size='3x'
                className='m-2'
              />
              <div>
                <h1>320</h1>
                <h4>TRUSTED TUTORS</h4>
              </div>
            </div>
            <div className='flex'>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size='3x'
                className='m-2'
              />
              <div>
                <h1>1,000</h1>
                <h4>SCHEDULES</h4>
              </div>
            </div>
            <div className='flex'>
              <FontAwesomeIcon
                icon={faChalkboardUser}
                size='3x'
                className='m-2'
              />
              <div>
                <h1>587</h1>
                <h4>COURSES</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OnlineLearingBenefits;
