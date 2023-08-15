//********* */ https://github.com/Solomon04/nextjs-notion-blog/blob/main/pages/post/%5Bslug%5D.tsx ***********//

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import NotionService from '../../../services/notion-service'
import Layout from '../../../components/blog/layout'
import Container from '../../../components/blog/container'
import Header from '../../../components/blog/header'
import PostHeader from '../../../components/blog/post-header'
import PostTitle from '../../../components/blog/post-title'
import PostBody from '../../../components/blog/post-body'
import markdownToHtml from '../../../lib/markdownToHtml'
import styles from '../../../styles/blog.module.scss'


const Post = ({ content, post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log('Está na pagina do post');
  // console.log('Tipo do conteúdo recebido: ', typeof(content));
  console.log('Conteúdo recebido: ', content);
  
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Carregando...</PostTitle>
        ) : (
          <>
            <article className={ styles.post }>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property='og:image' content={post.cover} />
              </Head>
              <PostHeader
                title={post.title}
                description={post.description}
                cover={post.cover}
                date={post.date}
                author={post.author}
                avatar={post.avatar}
              />
              <PostBody content={content} />
              {/* <ReactMarkdown className={ styles.postBody }>
                {markdown}
              </ReactMarkdown> */}
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const notionService = new NotionService()
  const p = await notionService.getSingleBlogPost(params?.slug)
  
  // console.log('PPPPPPPPPPPPP: ', p);  
  
  if (!p) {
    throw new Error('Post not found')
  }
  const content = await markdownToHtml(p.markdown || '')
  return {
    props: {
      // markdown: p.markdown,
      // post: p.post
      post: p.post,
      content,
    }
  }
}

export async function getStaticPaths() {
  const notionService = new NotionService()
  
  const posts = await notionService.getPublishedBlogPosts()
  
  // const paths = posts.map(post => {
  //   return `/posts/${post.slug}`
  // })

  // return {
  //   paths,
  //   fallback: false
  // }

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

export default Post
