const Contact = () => {
  return (
    <section className='bg-gray-50 px-4 py-20 md:px-0' id='contact'>
      <div className='mx-auto my-0  max-w-[1200px]  '>
        <p className='text-primary-600 w-full text-center text-xl font-bold md:text-2xl'>
          CONTACT US
        </p>
        <div className=' flex flex-col-reverse pt-8 shadow-xl lg:flex-row'>
          <div className=' w-full bg-gray-200 lg:h-[800px] lg:w-[600px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3649.676820049039!2d86.4197686314583!3d23.830088603057934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708499353467!5m2!1sen!2sin'
              className='h-[400px] w-full border-none lg:h-[800px] lg:w-[600px]'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='h-full w-full bg-white p-8 lg:h-[800px] lg:w-[600px]'>
            <h4 className='py-2 text-xl font-[600] md:text-3xl'>Contact us</h4>
            <p className='max-w-[350px] py-2 text-xl text-gray-400 md:w-[400px]'>
              We're open for any suggestion or just to have a chat
            </p>
            <div className='flex flex-col items-start justify-between py-2 md:flex-row md:py-4'>
              <div>
                <div className='py-1 text-lg font-[600] md:py-2'>ADDRESS:</div>
                <p className='w-[200px] text-lg text-gray-400'>
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              <div className='flex flex-row items-center gap-2 md:flex-col md:items-start md:gap-0'>
                <div className='py-1 text-lg font-[600] md:py-2'>EMAIL:</div>
                <a
                  href='mailto:abc@gmail.com'
                  className='hover:text-primary-600 w-[200px] text-lg '
                >
                  info@yoursite.com
                </a>
              </div>
              <div className='flex flex-row items-center gap-2 md:flex-col md:items-start md:gap-0'>
                <div className='py-1 text-lg font-[600] md:py-2'>PHONE:</div>
                <a
                  href='tel:1256622'
                  className='hover:text-primary-600 w-[200px] text-lg '
                >
                  + 1235 2355 98
                </a>
              </div>
            </div>
            {/* form */}
            <div className='py-4'>
              <form action=''>
                <div className='flex flex-col gap-6 md:flex-row'>
                  <input
                    type='text'
                    className='h-[50px] max-w-[400px] rounded-sm border-gray-300 focus:border-none active:border-none active:outline-none md:w-[260px]'
                    name='name'
                    placeholder='Name'
                  />
                  <input
                    type='email'
                    className=' h-[50px] max-w-[400px] rounded-sm border-gray-300 focus:border-none active:border-none active:outline-none md:w-[260px]'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <input
                  type='text'
                  className='my-4 h-[50px] w-full rounded-sm border-gray-300 focus:border-none active:border-none active:outline-none md:w-[545px]'
                  name='subject'
                  placeholder='Subject'
                />
                <textarea
                  name='message'
                  className='my-2 w-full rounded-sm border-gray-300 focus:border-none active:border-none active:outline-none md:w-[545px]'
                  placeholder='Create a message here'
                  cols={20}
                  rows={4}
                />
                <br />
                <button
                  type='submit'
                  className='bg-primary-600 my-2 h-[50px] rounded px-4 py-2 font-[600] text-white hover:shadow-lg md:w-[150px]'
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            <div>
              <div className='my-4 text-lg  font-[600] md:text-2xl'>
                Follow us here
              </div>
              <div className='flex gap-2 '>
                <a
                  href='#'
                  className='text-primary-600 md:text-md text-sm font-[600] transition-all hover:text-black'
                >
                  FACEBOOK
                </a>
                <a
                  href='#'
                  className='text-primary-600 md:text-md text-sm font-[600] transition-all hover:text-black'
                >
                  TWITTER
                </a>
                <a
                  href='#'
                  className='text-primary-600 md:text-md text-sm font-[600] transition-all hover:text-black'
                >
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
