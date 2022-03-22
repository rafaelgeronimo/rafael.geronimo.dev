import { Navbar } from "../NavBar";
import Footer from "./footer";
import styles from '../../styles/blog.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={ styles.layout }>
        <Navbar />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
