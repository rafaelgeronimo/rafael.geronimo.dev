import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../../types/author";
import styles from '../../styles/blog.module.scss'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export default function PostPreview ({
  title, coverImage, date, excerpt, author, slug,
}: Props) {
  return (
    <div className={ styles.postPreview }>
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3>
        <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <p>{excerpt}</p>
      <div className={ styles.postDate }>
        <DateFormatter dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
