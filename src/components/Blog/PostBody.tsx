import Avatar from './Avatar';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import DateFormater from './DateFormater';

const PostBody: FC<{ slug: string }> = ({ slug }) => {
  const [blogPost, setBlogPost] = useState<any>();
  const [content, setContent] = useState();

  const post = () => {
    if (slug) {
      fetch(`/api/slug?slug=${slug}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }).then((res) =>
        res.json().then((data) => {
          setBlogPost(data.post);
          setContent(data.content);
        })
      );
    }
  };
  useEffect(() => {
    post();
  });

  if (blogPost) {
    return (
      <>
        <Head>
          <title>{blogPost.title}</title>
          <meta property='og:image' content={blogPost.ogImage.url} />
        </Head>
        <section className='bg-gray-200 p-4 py-20'>
          <div className='mx-auto my-0 max-w-[1200px] '>
            <h4 className='text-primary-600 pb-6 text-[40px]'>Blog.</h4>

            <h1 className='pb-6 text-[40px] '>{blogPost.title}</h1>

            <div>
              <img
                src={blogPost.coverImage}
                className='h-[500px] w-full object-contain'
                alt=''
              />
            </div>
            <div>
              <div>
                <Avatar
                  picture={blogPost.author.picture}
                  name={blogPost.author.name}
                />
                <div className='text-xl font-[400]'>
                  <DateFormater dateString={blogPost.date} />
                </div>
              </div>
              <div>
                <div
                  className='py-4'
                  dangerouslySetInnerHTML={{ __html: content as any }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default PostBody;
