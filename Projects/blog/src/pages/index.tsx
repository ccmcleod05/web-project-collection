import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import { Inter } from '@next/font/google'
import BlogCard, { blogCardProps } from './../components/blog-card'
import BlogCardLayout from './../layouts/blog-card-layout'
import TitleBar from './../components/title-bar'

import styles from '@/styles/Home.module.css'

function Home({ blogCardDataSet }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog project app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Change Favicon */}
      </Head>
      <main className={styles.main}>
        <div>Yo</div>
        <TitleBar/>
        <BlogCardLayout>
          {blogCardDataSet.map((blogCardData: blogCardProps, index: number) => {
            return (
              <BlogCard 
                key={`${blogCardData.author}-${index}`} 
                imageSrc={blogCardData.imageSrc} 
                imageAlt={blogCardData.imageAlt} 
                title={blogCardData.briefDescription} 
                briefDescription={blogCardData.briefDescription} 
                author={blogCardData.author}
              />
            )
          })}
        </BlogCardLayout>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ blogCardDataSet: blogCardProps[] }> = async () => {
  // const url: string = process.env.REACT_APP_URL ? process.env.REACT_APP_URL : '';
  const url: string = 'https://blog-project-4b9e4-default-rtdb.firebaseio.com/';
  let res: Response = await fetch(url);
  let blogCardDataSet: blogCardProps[] = await res.json();

  if (!blogCardDataSet) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogCardDataSet,
    },
  }
}

export default Home;