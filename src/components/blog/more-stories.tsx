import PostPreview from "./post-preview"
import { BlogPost } from "../../../@types/schema"
import styles from '../../styles/blog.module.scss'

type MoreStoriesProps = {
  posts: BlogPost[]
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section className={ `animate__animated animate__bounceInUp ${styles.moreStories}`}>
      <h2>Outros posts</h2>
      <div className={ styles.postsGrid }>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            slug={post.slug}
            cover={post?.cover || null}
            title={post.title}
            date={post.date}
            author={post.author}
            avatar={post.avatar}
            description={post.description}
          />
        ))}
      </div>
    </section>
  )
}
