const UpvcWindow = () => {
  const Item = [
    {
      photo: 'images/home1.jpg',
      line: 'Bridon windows have the superior properties for a lasting finish that easy to maintain and never needs painting.Our windows are engineered to reduce exterior noise, making your home a quieter, more comfortable place to live',
      title: 'INNOVATIVE DESIGN',
    },
    {
      photo: 'images/home1.jpg',
      line: 'Bridon windows have the superior properties for a lasting finish that easy to maintain and never needs painting.Our windows are engineered to reduce exterior noise, making your home a quieter, more comfortable place to live',
      title: 'INNOVATIVE DESIGN',
    },
    {
      photo: 'images/home1.jpg',
      line: 'Bridon windows have the superior properties for a lasting finish that easy to maintain and never needs painting.Our windows are engineered to reduce exterior noise, making your home a quieter, more comfortable place to live',
      title: 'INNOVATIVE DESIGN',
    },
    {
      photo: 'images/home1.jpg',
      line: 'Bridon windows have the superior properties for a lasting finish that easy to maintain and never needs painting.Our windows are engineered to reduce exterior noise, making your home a quieter, more comfortable place to live',
      title: 'INNOVATIVE DESIGN',
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
                  <img src={list.photo} alt='' />
                  <h3 className='font-medium hover:text-teal-700'>
                    {list.title}
                  </h3>
                  <p className=' text-[#888]'>{list.line}</p>
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
