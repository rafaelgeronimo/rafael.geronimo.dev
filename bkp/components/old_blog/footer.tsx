import Container from "./container";
const today = new Date()
const year = today.getFullYear()
import styles from '../../styles/blog.module.scss'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <Container>
        <div className={ styles.footerInfo }>
          <h3>
            Copyright © {year} - Rafael Gerônimo
          </h3>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
