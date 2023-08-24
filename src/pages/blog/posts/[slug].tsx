//********* */ https://github.com/Solomon04/nextjs-notion-blog/blob/main/pages/post/%5Bslug%5D.tsx ***********//

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import NotionService from "../../../services/notion-service";
import Layout from "../../../components/blog/layout";
import Container from "../../../components/blog/container";
import Header from "../../../components/blog/header";
import PostHeader from "../../../components/blog/post-header";
import PostTitle from "../../../components/blog/post-title";
import PostBody from "../../../components/blog/post-body";
import markdownToHtml from "../../../lib/markdownToHtml";
import styles from "../../../styles/blog.module.scss";

const Post = ({
  content,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Carregando...</PostTitle>
        ) : (
          <>
            <article className={styles.post}>
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.cover} />
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
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const notionService = new NotionService();
  const p = await notionService.getSingleBlogPost(params?.slug);

  if (!p) {
    throw new Error("Post not found");
  }
  const post_content = p.markdown.parent;
  const content = await markdownToHtml(post_content || "");
  return {
    props: {
      post: p.post,
      content,
    },
  };
};

export async function getStaticPaths() {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
