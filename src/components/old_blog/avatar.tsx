import Image from 'next/image'
import styles from '../../styles/blog.module.scss'

type Props = {
  name: string
  picture: string
}

export default function Avatar({ name, picture}: Props) {
  return (
    <div className={ styles.avatar }>
      <Image
        height={50}
        width={50}
        src={picture}
        alt={name}
      />
      <div>{name}</div>
    </div>
  )
}
