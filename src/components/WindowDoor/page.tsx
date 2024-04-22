const UpvcWindow = () => {
  const Item = [
    {
      photo: 'images/door3.jpg',
      line: 'We have the superior properties for a lasting finish that easy to maintain and never needs painting.Our windows are engineered to reduce exterior noise, making your home a quieter, more comfortable place to live',
      title: 'INNOVATIVE DESIGN',
    },
    {
      photo: 'images/door2.jpg',
      line: 'We are proud to announce, to have first and the latest technology and automation production which fabricates consistent high quality energy efficient products for all types of double glazed windows and doors.',
      title: 'CREATIVE BUILD',
    },
    {
      photo: 'images/door5.jpg',
      line: 'Our uPVC windows and doors are designed to reduce heat loss in cold weather and solar heat buildup during warm weather while sliding & folding windows or doors.',
      title: 'MULTITYPE WINDOWS & DOORS',
    },
    {
      photo: 'images/door2.jpg',
      line: 'With our professional windows and doors installation, your house turn a home. Bridon is proud to use uPVC premium materials and the most thermally superior, energy efficient and beautiful dual-panel windows ever built.',
      title: 'SUPERIOR QUALITY',
    },
  ];
  return (
    <>
      <section>
        <div className='flex cursor-pointer flex-col items-center justify-between py-12'>
          <h1>
            <span className='font-medium'>Multipurpose</span> uPVC Windows and
            Doors
          </h1>
          <p className='mt-2 text-xl text-[#888]'>
            We’re proud to be providing you high quality uPVC windows with
            Creative and attractive Designs
          </p>

          <div className='flex flex-row items-center justify-between gap-6 p-10'>
            {Item.map((list, i) => {
              return (
                <div className='flex flex-col items-center gap-4 ' key={i}>
                  <img
                    className='h-[200px] w-[200px] object-cover'
                    src={list.photo}
                    alt=''
                  />
                  <h3 className='h-[50px] text-center font-medium hover:text-teal-700'>
                    {list.title}
                  </h3>
                  <p className='text-[#888]'>{list.line}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default UpvcWindow;
