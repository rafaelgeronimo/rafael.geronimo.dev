import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/blog.module.scss'

type CoverImageProps = {
  title: string
  src: string
  slug?: string
}

export default function CoverImage({ title, src, slug }: CoverImageProps) {
  const image = (
    <Image
      width={1200}
      height={300}
      src={src}
      layout='responsive'
      alt={`Imagem de capa para ${title}`}
      className={ styles.coverImage }
    />
  )
  return (
    <div className={ styles.coverImage }>
      {slug ? (
        <Link as={`/blog/posts/${slug}`} href='/blog/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
