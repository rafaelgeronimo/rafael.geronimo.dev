import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../../types/author'

import styles from '../../styles/blog.module.scss'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  excerpt: string
}

export default function PostHeader({ title, coverImage, date, author, excerpt }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={ styles.postAvatar }>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <p className={ styles.postExcerpt }>{excerpt}</p>
      <div className={ styles.postCover }>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className={ styles.postHead }>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}