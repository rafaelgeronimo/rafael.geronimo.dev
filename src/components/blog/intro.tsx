import styles from '../../styles/blog.module.scss'

export default function Intro() {
  return (
    <section className={ `animate__animated animate_bounceInLeft ${styles.intro}` }>
      <h1>
        {`Rafael Gerônimo » Blog`}
      </h1>
    </section>
  )
}
