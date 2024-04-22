const Gallery = () => {
  return (
    <section className='px-6 py-10'>
      <div className='flex justify-center text-center'>
        <h1 className='mb-6 font-medium text-[#888]'>
          <span className='font-bold text-black'>Creative</span> and Modern
          design
        </h1>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door10.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door21.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door12.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door22.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door14.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door15.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door16.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door17.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door18.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door19.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door20.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='images/door11.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
