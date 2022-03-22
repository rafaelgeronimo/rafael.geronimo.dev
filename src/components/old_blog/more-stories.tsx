import PostPreview from "./post-preview";
import Post from '../../types/post'
import styles from '../../styles/blog.module.scss'

type Props = {
  posts: Post[]
}

export default function MoreStories({ posts }: Props) {
  return (
    <section className={`animate__animated animate__bounceInUp ${styles.moreStories}`}>
      <h2>Outros posts</h2>
      <div className={ styles.postsGrid }>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
