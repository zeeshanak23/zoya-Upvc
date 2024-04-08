import React from 'react';
import { useState } from 'react';

const HeroTab = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('home');

  const tabs = [
    {
      title: 'Home',
      href: '#home',
      active: 'home',
    },
    {
      title: 'About',
      href: '#about',
      active: 'about',
    },
    {
      title: 'Team',
      href: '#',
      active: 'team',
    },
    {
      title: 'Pricing',
      href: '#price',
      active: 'price',
    },
    {
      title: 'Blog',
      href: '#blog',
      active: 'blog',
    },
    {
      title: 'Contact',
      href: '#contact',
      active: 'contact',
    },
  ];
  return (
    <>
      <div className='bg-primary-300 relative z-20 my-5  lg:bg-transparent'>
        <nav className='   mx-auto my-0 flex w-full items-center justify-between sm:left-0 sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1400px]  '>
          <div className='hidden h-[60px]  min-w-[1116px] items-center gap-12 bg-white bg-opacity-5 px-4 py-2 sm:h-[70px]  lg:flex '>
            {tabs.map((tab, i) => {
              return (
                <a
                  onClick={() => {
                    setActiveTab(tab.active);
                  }}
                  key={i}
                  href={tab.href}
                  className={`hover:text-primary-300 uppercase ${
                    activeTab === tab.active ? `text-primary-600` : `text-white`
                  }  font-[600]  hover:cursor-pointer`}
                >
                  {tab.title}
                </a>
              );
            })}
          </div>
          <div className=' bg-primary-600  relative -left-4 hidden h-[70px] min-w-[70px] skew-x-[-20deg] lg:flex'></div>
          <div className='bg-primary-600 relative left-3 z-20 flex  h-[60px] min-w-[250px] items-center justify-center  pr-7 font-[500] text-white hover:cursor-pointer sm:-left-10 sm:h-[70px] sm:text-xl'>
            GET CERTIFICATE
          </div>
          <div
            onClick={() => {
              setMenuActive(!menuActive);
            }}
            className='relative flex items-center gap-2 px-2 lg:hidden'
          >
            <div>
              <div className='mb-1 h-[3px] w-6 bg-white'></div>
              <div className='mb-1 h-[3px] w-6 bg-white'></div>
              <div className='h-[3px] w-6 bg-white'></div>
            </div>
            <div className='font-bold text-white'>MENU</div>
          </div>
        </nav>
        {/**
         * responsive
         */}
        <div
          style={{}}
          className={` bg-primary-800 absolute z-50  w-full flex-col ${
            menuActive ? `h-[400px]` : `h-[0px]`
          }  transition-all  lg:hidden `}
        >
          {menuActive &&
            tabs.map((tab, i) => {
              return (
                <div
                  onClick={() => {
                    setActiveTab(tab.active);
                  }}
                  key={i}
                  className=' p-4 font-bold text-white '
                >
                  <a href={tab.href}>{tab.title}</a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HeroTab;
