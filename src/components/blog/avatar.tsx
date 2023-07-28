import Image from "next/legacy/image"
import styles from '../../styles/blog.module.scss'

type AvatarProps = {
  name: string
  picture: string
}

export default function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className={ styles.avatar }>
      <Image
        height={50}
        width={50}
        src={picture}
        alt={name}
      />
      <div>{ name }</div>
    </div>
  )
}
