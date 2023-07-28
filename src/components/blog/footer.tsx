import Container from "./container";
import Link from "next/link";
const today = new Date()
const year = today.getFullYear()
import styles from '../../styles/blog.module.scss'

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <Container>
        <div className={ styles.footerInfo}>
          <h3>
            Copyright © {year} - Rafael Gerônimo
          </h3>
          <div>
            <Link href={`/`}>
              Home
            </Link>
            <Link href={`/blog`}>
              Blog
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
