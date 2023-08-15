import markdownStyles from './markdown-styles.module.scss'
import styles from '../../styles/blog.module.scss'

type Props = {
  content: string
}

export default function PostBody({ content }: Props) {
  // console.log('Estou no postbody');
  // console.log('Content type: ', typeof(content));
  // console.log('Content content: ', content);
  
  return (
    <div className={ styles.postBody }>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
