import styles from '../../styles/blog.module.scss'

export default function Intro() {
  return (
    <section className={ `animate__animated animate__bounceInLeft ${styles.intro}` }>
      <h1>
        Rafael.Gerônimo » blog
      </h1>
    </section>
  )
}
