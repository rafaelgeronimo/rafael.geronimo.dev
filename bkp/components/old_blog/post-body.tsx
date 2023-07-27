import markdownStyles from './markdown-styles.module.scss'
import styles from '../../styles/blog.module.scss'

type Props = {
  content: string
}

export default function PostBody({ content }: Props) {
  return (
    <div className={ styles.postBody }>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
