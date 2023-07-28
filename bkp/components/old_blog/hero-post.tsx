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

export default function HeroPost({
  title, coverImage, date, excerpt, author, slug,
}: Props) {
  return (
    <section className="animate__animated animate__bounceIn">
      <div className={ styles.postImage }>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className={ styles.postData}>
        <div>
          <h3>
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              {title}
            </Link>
          </h3>
          <div className={ styles.postDate }>
            <DateFormatter dateString={ date } />
          </div>
        </div>
        <div>
          <p className={ styles.postResume }>{excerpt}</p>
          <Avatar name={ author.name } picture={ author.picture } />
        </div>
      </div>
    </section>
  );
}
