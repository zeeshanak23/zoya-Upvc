const Door = () => {
  const Item = [
    {
      photo: 'images/door9.jpg',
    },
    {
      photo: 'images/door2.jpg',
    },
    {
      photo: 'images/door3.jpg',
    },
    {
      photo: 'images/door4.jpg',
    },
    {
      photo: 'images/door5.jpg',
    },
    {
      photo: 'images/door6.jpg',
    },
    {
      photo: 'images/door7.jpg',
    },
    {
      photo: 'images/door8.jpg',
    },
    {
      photo: 'images/door1.jpg',
    },
  ];
  return (
    <>
      <section>
        <div className='flex flex-col items-center justify-between gap-2 '>
          <h1>
            <span></span> Windows & Doors
          </h1>
          <p className='mb-4 mt-1 text-xl text-[#888]'>
            We provide a personal touch and competitive pricing that only a
            local independent company like ourselves can offer.
          </p>
          <div className='grid w-full grid-flow-row grid-cols-4 overflow-hidden '>
            {Item.map((list, i) => {
              return (
                <div key={i}>
                  <img
                    className='h-[300px] w-[400px]'
                    src={list.photo}
                    alt=''
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Door;
