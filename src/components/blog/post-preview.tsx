import Avatar from "./avatar"
import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import Link from "next/link"
import styles from '../../styles/blog.module.scss'

type PostPreviewProps = {
  slug: string
  cover?: string
  title: string
  date: string
  author: string
  avatar: string
  description: string
}

export default function PostPreview ({ 
  slug, cover, title, date, author, avatar, description
 }: PostPreviewProps) {
  return (
    <div className={ styles.postPreview }>
      <div>
        <CoverImage slug={ slug } title={ title } src={ cover } />
      </div>
      <h3>
        <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
          { title }
        </Link>
      </h3>
      <p>{ description }</p>
      <div className={ styles.postDate }>
        <DateFormatter dateString={ date } />
      </div>
      <Avatar name={ author } picture={ avatar } />
    </div>
  );
}
