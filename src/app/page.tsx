'use client';

import Head from 'next/head';
import * as React from 'react';

import Blog from '@/components/Blog/Blog';
import Pricing from '@/components/Pricing/Pricing';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import OnlineLearingBenefits from '@/components/OnlineLearingBenefits/OnlineLearingBenefits';
import OnlineCourse from '@/components/OnlineCourse/OnlineCourse';

import Testimonial from '@/components/Testimonial/Testimonial';

import FaqSection from '@/components/Faq/FaqSection';
import UpvcWindow from '@/components/WindowDoor/page';
import Door from '@/components/Door/page';
import WeDo from '@/components/WeDo/page';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [allPost, setPost] = React.useState<
    [
      {
        coverImage: string;
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        author: { picture: string; name: string };
      }
    ]
  >();

  const Post = async () => {
    try {
      const res = await fetch(`/api/allPosts`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await res.json();
      setPost(result.post);
    } catch (err) {
      return;
    }
  };

  React.useEffect(() => {
    Post();
  }, []);

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>

      <div className='teal'>
        <Hero banner='/images/herobg.jpg' />
        <UpvcWindow />
        <Door />
        <WeDo banner='/images/weDoBg.jpg' />
        {/* <OnlineLearingBenefits />

        <Testimonial />
        {allPost && <Blog morePost={allPost} />}

        <Pricing />
        <FaqSection />
        <Contact />
        <Footer /> */}
        <Footer />
      </div>
    </main>
  );
}
