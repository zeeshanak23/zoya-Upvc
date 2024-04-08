import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonial = () => {
  const testimonial = [
    {
      title: 'ROGER SCOTT',
      post: 'MARKETING MANAGER',
      img: '/images/blog1.jpg',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'ROGER SCOTT',
      post: 'MARKETING MANAGER',
      img: '/images/blog2.jpg',

      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'ROGER SCOTT',
      post: 'MARKETING MANAGER',
      img: '/images/blog3.jpg',

      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];
  return (
    <section className='bg-gray-100 px-4 py-16 md:px-0 md:py-20'>
      <div className=' z-40 mx-auto my-0 max-w-[1200px]    ' id='testimonial'>
        <p className='text-primary-600 w-full pb-6 text-center text-lg font-bold md:text-xl'>
          TESTIMONIAL
        </p>
        <h1 className='w-full py-2 text-center font-[600] md:pb-16 md:text-5xl'>
          Our Successful Students
        </h1>
        <div className='flex w-full flex-col items-center gap-6 pb-8 pt-16 lg:flex-row'>
          {testimonial.map((data, i) => {
            return (
              <div
                key={i}
                className={`  px-6 py-4  md:min-h-[300px]  md:p-8 

                ${i === 1 ? `bg-primary-600 shadow-lg` : `bg-white`}
                md:min-w-[400px]`}
              >
                <div className='flex items-start gap-4 md:gap-6'>
                  <div className=' flex items-end '>
                    <img
                      src={data.img}
                      className='mt-4 h-[80px] w-[80px] rounded-[50%] object-cover md:h-[90px] md:w-[90px]'
                      alt=''
                    />
                    <div
                      className={` -ml-[30px] flex h-6 w-6 items-center justify-center rounded-full 
                    ${i === 1 ? `bg-white` : `bg-primary-600`}
                    `}
                    >
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className={`
                       ${i === 1 ? `text-primary-600` : `text-white`}
                        `}
                        size='sm'
                      />
                    </div>
                  </div>

                  <div className='py-6'>
                    <h3
                      className={`pb-3
                      font-[600]
                ${i != 1 ? `text-black` : `text-white`}
                    
                    `}
                    >
                      {data.title}
                    </h3>
                    <p
                      className={`text-primary-600 text-sm font-[600] leading-relaxed
                ${i != 1 ? `text-primary-600` : `text-white`}
                    
                    `}
                    >
                      {data.post}
                    </p>
                  </div>
                </div>
                <p
                  className={`pt-2 text-lg 
                
                ${i != 1 ? `text-gray-400` : `text-gray-100`}
                
                `}
                >
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
