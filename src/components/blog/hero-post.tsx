import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import CoverImage from "./cover-image";
import styles from '../../styles/blog.module.scss'

type HeroPostProps = {
  title: string
  cover?: string
  date: string
  description: string
  author: string
  avatar: string
  slug: string
}

export default function HeroPost({
  title, cover, date, description, author, avatar, slug
}: HeroPostProps) {
  return (
    <section className="animate__animated animate__bounceIn">
      <div className={ styles.postImage }>
        <CoverImage title={ title } src={ cover } slug={ slug } />
      </div>
      <div className={ styles.postData }>
        <div>
          <h3>
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              { title }
            </Link>
          </h3>
          <div className={ styles.postDate }>
            <DateFormatter dateString={ date } />
          </div>
        </div>
        <div>
          <p className={ styles.postResume }>{ description }</p>
          <Avatar name={ author } picture={ avatar } />
        </div>
      </div>
    </section>
  );
}
