import Container from "../../components/old_blog/container";
import MoreStories from "../../components/old_blog/more-stories";
import HeroPost from "../../components/old_blog/hero-post";
import Intro from "../../components/old_blog/intro";
import Layout from "../../components/old_blog/layout";
import { getAllPosts } from '../../lib/api';
import Head from 'next/head'
// import Post from '../../types/post'
import styles from '../../styles/blog.module.scss'

import 'animate.css'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  console.log(allPosts);  
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Rafael Gerônimo - Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
