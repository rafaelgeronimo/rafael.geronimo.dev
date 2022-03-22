import Avatar from "./avatar"
import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import PostTitle from "./post-title"

import styles from '../../styles/blog.module.scss'

type PostHeaderProps = {
  title: string
  cover: string
  date: string
  author: string
  avatar: string
  description: string
}

export default function PostHeader({
  title, cover, date, author, avatar, description
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{ title }</PostTitle>
      <div className={ styles.postAvatar }>
        <Avatar name={ author } picture={ avatar } />
      </div>
      <p className={ styles.postExcerpt }>{ description }</p>
      <div className={ styles.postCover }>
        <CoverImage title={ title } src={cover} />
      </div>
      <div className={ styles.postHead }>
        <div>
          <Avatar name={ author } picture={ avatar } />
        </div>
        <div>
          <DateFormatter dateString={ date } />
        </div>
      </div>
    </>
  )
}
