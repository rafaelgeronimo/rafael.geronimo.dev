import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getAllPosts, getPostBySlug } from '../../../lib/api'
import Layout from '../../../components/old_blog/layout'
import Container from '../../../components/old_blog/container'
import Header from '../../../components/old_blog/header'
import PostType from '../../../types/post'
import PostHeader from '../../../components/old_blog/post-header'
import PostTitle from '../../../components/old_blog/post-title'
import PostBody from '../../../components/old_blog/post-body'

import styles from '../../../styles/blog.module.scss'

import markdownToHtml from '../../../lib/markdownToHtml'
import dynamic from 'next/dynamic'
const Share = dynamic(
  () => {
    return import ('../../../components/old_blog/share')
  },
  { ssr: false }
);

type Props = {
  post: PostType
  morePosts: PostType[]
}

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            { /* <Share /> */ }
            <article className={ styles.post }>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
