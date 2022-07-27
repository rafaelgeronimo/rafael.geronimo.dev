// import styles from './about.module.scss';
import Image from "next/image";
import styles from "../../styles/about.module.scss";
import profilePic from "../../img/profile.png";
import Link from "next/link";
import 'animate.css';

export default function About() {
  return (
    <main className={styles.mainContainer}>
      <div>
        <h1 className={`animate__animated animate__slideInLeft`}>Quem sou eu</h1>
        <h2 className={`animate__animated animate__zoomIn`}>
          Olá!
          <br /> Me chamo <strong>Rafael Gerônimo</strong>,<br /> e sou um
          desenvolvedor de softwares.
        </h2>
        <p className={`animate__animated animate__bounceIn`}>
          Com mais de 15 anos de experiência profissional na área de tecnologia,
          trabalhando com hardware e redes, decidi realizar uma transação de
          carreira, migrando para a área de desenvolvimento de softwares.
          <br />
          Como parte dessa trajetória, decidido a seguir um antigo sonho, me
          formei como bolsista, no ano de 2018 em Sistemas para Internet pela
          Unicesumar.
          <br />
          Em 2020, iniciei os estudos na Trybe, para aperfeiçoar os
          conhecimentos nas Hard Skills e também desenvolver as habilidades de
          Soft Skills, concluindo em fevereiro de 2022.
        </p>
        <p className={`animate__animated animate__bounceIn`}>
          Durante os estudos, foram desenvolvidos mais de 30 projetos pela Trybe
          e outros tantos na Unicesumar.
        </p>
        <p className={`animate__animated animate__bounceIn`}>
          Em abril de 2022, fui descoberto pela{" "}
          <Link href={`https://wolven.com.br`}>
            <a>Wolven</a>
          </Link>
          , onde trabalho como desenvolvedor de softwares.
        </p>
      </div>
      {/* <div>
        <Image
          width={150}
          height={150}
          src={profilePic}
          alt="Rafael Geronimo Avatar"
        />
      </div> */}
    </main>
  );
}
