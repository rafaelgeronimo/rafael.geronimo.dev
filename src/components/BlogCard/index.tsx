import { FunctionComponent } from 'react'
import Link from 'next/link'
import { BlogPost } from '../../../@types/schema'
import dayjs from 'dayjs'
import Image from 'next/image'
import styles from '../../styles/blog.module.scss'

type BlogCardProps = {
  post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat).locale('pt-br')

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
  return (
    (<Link href={`/post/${post.slug}`}>

      <div key={post.title}>
        <div>
          <Image
            src={post.cover}
            alt={`Imagem de capa para ${post.title}`}
            width={1200}
            height={300}
            layout='responsive'
            className={ styles.coverImage }
          />
        </div>
        <div>
          <div>
            <span>
              {/* <h4>{dayjs(post.date).format('LL')}</h4> */}
            </span>
            <span>
              <h3>{post.title}</h3>
            </span>
            <span>
              <p>{post.description}</p>
            </span>
            <span>
              {
                post.tags.map(tag => (
                  <span key={tag.id}>
                    #{tag.name}
                  </span>
                ))
              }
            </span>
          </div>
        </div>
      </div>

    </Link>)
  );
}

export default BlogCard