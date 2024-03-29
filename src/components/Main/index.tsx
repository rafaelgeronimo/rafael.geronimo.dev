import Image from "next/legacy/image";
import Link from "next/link";
import styles from './main.module.scss';
import 'animate.css';

import tecGit from '../../../public/tec_git.svg';
import tecHtml5 from '../../../public/tec_html5.svg';
import tecCss3 from '../../../public/tec_css3.svg';
import tecJavascript from '../../../public/tec_javascript.svg';
import tecReact from '../../../public/tec_react.svg';
import tecNodeJS from '../../../public/tec_nodejs.svg';
import tecNext from '../../../public/tec_next.svg';
// import tecAngular from '../../public/tec_angular.svg';
// import tecPython from '../../../public/tec_python.svg';
// import avatar from 'http://github.com/rafaelgeronimo.png'

export function Main() {
  return (
    <main className={ `theme theme__light ${ styles.mainContainer }` }>
      <section className={ `animate__animated animate__bounceIn ${ styles.title }` }>
        <Image
          width={150}
          height={150}
          src={`http://github.com/rafaelgeronimo.png`}
          alt="Rafael Geronimo Avatar"
        />
        <h1>Rafael Gerônimo</h1>
        <h3>Desenvolvedor Web</h3>
      </section>
      <p className="animate__animated animate__bounceIn">Formado pela Trybe como desenvolvedor de aplicações para web e em Sistema para Internet pela
        Unicesumar, tenho sempre buscado aperfeiçoar os meus conhecimentos na área para que possa
        superar qualquer desafio que aparecer.
        <strong>
          <Link href='/about'> Saiba mais aqui</Link>
        </strong>.
      </p>
      <section className={ `animate__animated animate__slideInUp ${styles.technologies}` }>
        <h3>Tecnologias</h3>
        <div className={ styles.badges }>
          <Image
            width={75}
            height={75}
            src={ tecGit }
            alt="Git"
          />
          <Image
            width={75}
            height={75}
            src={ tecHtml5 }
            alt="HTML5"
          />
          <Image
            width={75}
            height={75}
            src={ tecCss3 }
            alt="CSS3"
          />
          <Image
            width={75}
            height={75}
            src={ tecJavascript }
            alt="JavaScript"
          />
          <Image
            width={75}
            height={75}
            src={ tecReact }
            alt="React"
          />
          <Image
            width={75}
            height={75}
            src={ tecNodeJS }
            alt="NodeJS"
          />
          <Image
            width={75}
            height={75}
            src={ tecNext }
            alt="Next"
          />
          {/* <Image
            width={75}
            height={75}
            src={ tecAngular }
            alt="Angular"
          /> */}
          {/* <Image
            width={75}
            height={75}
            src={ tecPython }
            alt="Git"
          /> */}
        </div>
      </section>
    </main>
  );
}