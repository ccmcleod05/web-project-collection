import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import { Inter } from '@next/font/google';
import BlogCard, { blogCardProps } from './../components/blog-card';
import BlogCardLayout from './../layouts/blog-card-layout';
import TitleBar from './../components/title-bar';
import fs from 'fs';

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
        <TitleBar/>
        <BlogCardLayout>
          {blogCardDataSet.map((blogCardData: blogCardProps, index: number) => {
            return (
              <BlogCard 
                key={`${blogCardData.author}-${index}`} 
                imageSrc={blogCardData.imageSrc} 
                imageAlt={blogCardData.imageAlt} 
                title={blogCardData.title} 
                briefDescription={blogCardData.briefDescription} 
                author={blogCardData.author}
                content={blogCardData.content}
              />
            )
          })}
        </BlogCardLayout>
      </main>
    </>
  )
}

async function getAccessToken () {
  var {google} = require("googleapis");
  var serviceAccount = require("firebase.json");

  var scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/firebase.database"
  ];

  var jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    scopes
  );

  return new Promise((resolve, reject) =>
    jwtClient.authorize((error: any, tokens: any) => {
      if (error)
        reject(error)
      else
        resolve(tokens.access_token)
    })
  )
}

export const getStaticProps: GetStaticProps<{ blogCardDataSet: blogCardProps[] }> = async () => {
  let blogCardDataSet: blogCardProps[] = [];

  const accessToken = await getAccessToken();

  const url = `https://blog-project-4b9e4-default-rtdb.firebaseio.com/blogs.json`;
  const res: Response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
  });
  const jsonData = await res.json();

  for (let blogName in jsonData){
    var blogDataPush: any = {};
      for (let blogData in jsonData[blogName]){
        if (blogData === 'path') {
          var path = jsonData[blogName][blogData]
          var content = fs.readFileSync(path, 'utf8');
          blogDataPush['content'] = content;
        }
        else {
          blogDataPush[blogData] = jsonData[blogName][blogData];
        }
      }
    blogCardDataSet.push(blogDataPush);
  }

  return {
    props: { 
      blogCardDataSet
    }
  }
}

export default Home;