import Head from 'next/head'
// import { Inter } from '@next/font/google'
import { GetServerSideProps } from 'next'
import BlogCard, { blogCardProps } from './../components/blog-card'
import BlogCardLayout from './../layouts/blog-card-layout'
import TitleBar from './../components/title-bar'

import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

let blogPosts: blogCardProps[] = [];

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog project app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Change Favicon */}
      </Head>
      <main className={styles.main}>
        <TitleBar/>
        <BlogCardLayout>
          {blogPosts.map((childInfo: blogCardProps, index: number) => {
            return (
              <BlogCard 
                key={`${childInfo.author}-${index}`} 
                imageSrc={childInfo.imageSrc} 
                imageAlt={childInfo.imageAlt} 
                title={childInfo.briefDescription} 
                briefDescription={childInfo.briefDescription} 
                author={childInfo.author}
              />
            )
          })}
        </BlogCardLayout>
      </main>
    </>
  )
}


{/*make get server side props for blog posts and serve to BlogCardLayout to map as children*/}
/*
function GetServerSideProps () {

}
*/