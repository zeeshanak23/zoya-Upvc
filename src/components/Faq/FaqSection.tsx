import { Disclosure, Menu } from '@headlessui/react';
import { ChevronUp } from 'heroicons-react';

const FaqSection = () => {
  return (
    <>
      <section className='teal m-auto flex flex-col items-center bg-gray-50 text-center '>
        <div>
          <h3 className='text-primary-400 text-[20px]'>FAQS</h3>
          <h1 className='mb-[30px] mt-[15px] text-[45px] font-[500] leading-tight'>
            Frequesntly Ask Question
          </h1>
        </div>
        <div className='mt-12'>
          <div className='group max-w-[350px] rounded bg-white outline outline-1 outline-gray-200   md:max-w-[900px]'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='group flex justify-between border-b-2 p-4 text-left font-medium  text-black hover:bg-teal-400   md:w-[900px] '>
                    <span className='text-[20px]'>
                      How to Enroll This Online Courses
                    </span>
                    <ChevronUp
                      className={`${
                        open
                          ? 'rotate-180 transform '
                          : 'rotate-360 transform group-hover:text-white'
                      }group-hover:text-white h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='p-8 text-left text-[17px]   text-gray-500 outline outline-1 outline-gray-200'>
                    This is the first item's accordion body. It is hidden by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. It's also worth
                    noting that just about any HTML can go within the
                    .accordion-body, though the transition does limit overflow.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='group flex justify-between border-b-2 p-4  text-left font-medium  text-black hover:bg-teal-400  md:w-[900px] '>
                    <span className='group text-[20px]'>
                      Where It is hidden by defaults,until the collapse
                    </span>
                    <ChevronUp
                      className={`${
                        open
                          ? 'rotate-180 transform '
                          : 'rotate-360 transform group-hover:text-white'
                      }group-hover:text-white h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='p-8 text-left text-[17px]   text-gray-500 outline outline-1 outline-gray-200'>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. It's
                    also worth noting that just about any HTML can go within the
                    .accordion-body, though the transition does limit overflow.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='border-b-1 group flex justify-between p-4  text-left font-medium  text-black hover:bg-teal-400   md:w-[900px] '>
                    <span className='text-[20px]'>
                      How It is hidden by default,until the collapse
                    </span>
                    <ChevronUp
                      className={`${
                        open
                          ? 'rotate-180 transform '
                          : 'rotate-360 transform group-hover:text-white'
                      }group-hover:text-white h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='p-8 text-left text-[17px]   text-gray-500 outline outline-1 outline-gray-200'>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. It's
                    also worth noting that just about any HTML can go within the
                    .accordion-body, though the transition does limit overflow.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </>
  );
};
export default FaqSection;
