import Head from 'next/head'
import { BlogPost } from '../../../@types/schema'
import NotionService from '../../services/notion-service'

import Container from '../../components/blog/container'
import MoreStories from '../../components/blog/more-stories'
import HeroPost from '../../components/blog/hero-post'
import Intro from '../../components/blog/intro'
import Layout from '../../components/blog/layout'

type Props = {
  allPosts: BlogPost[]
}

export default function Index({ allPosts }: Props) {
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
              cover={heroPost.cover}
              date={heroPost.date}
              author={heroPost.author}
              avatar={heroPost.avatar}
              slug={heroPost.slug}
              description={heroPost.description}
            />
          )}
          { morePosts.length > 0 && <MoreStories posts={morePosts} /> }
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const notionService = new NotionService()
  const allPosts = await notionService.getPublishedBlogPosts()
  return {
    props: { allPosts },
  }
}
