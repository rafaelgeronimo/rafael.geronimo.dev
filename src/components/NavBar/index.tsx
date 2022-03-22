import Link from 'next/link'
import 'animate.css'
import styles from './navbar.module.scss'
import {
  FaHome,
  FaNewspaper,
  FaAddressCard,
  // FaMailBulk,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  // FaMoon,
  // FaSun
} from 'react-icons/fa'

export function Navbar() {
  return (
    <header className={ `animate__animated animate__slideInDown ${styles.headerContainer}` }>
      <nav className={ styles.menu }>
        <ul className={ styles.navigationMenu }>
          <li>
            <Link href="/">
              <a><FaHome className={ styles.menuIcon } /> Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a><FaAddressCard className={ styles.menuIcon } /> Sobre</a>
            </Link>            
          </li>
          {/* <li>Portfolio</li>
          <li>Clientes</li> */}
          <li>
            <Link href="/blog">
              <a><FaNewspaper className={ styles.menuIcon } /> Blog</a>
            </Link>            
          </li>
          {/* <li>
            <Link href="/contact">
              <a><FaMailBulk className={ styles.menuIcon } /> Contato</a>
            </Link>            
          </li> */}
        </ul>
        <ul className={ styles.socialMediaMenu }>
          <li>
            <Link href="https://github.com/rafaelgeronimo">
              <a target="_blank">
                <FaGithubSquare className={ styles.githubIcon } />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/rafaelgeronimo">
              <a target="_blank">
                <FaLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://api.whatsapp.com/send?phone=5541984375647&text=Ol%C3%A1%20Rafael!">
              <a target="_blank">
                <FaWhatsappSquare />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <ul>
        {/* <li><FaMoon /></li> */}
      </ul>
    </header>
  )
}