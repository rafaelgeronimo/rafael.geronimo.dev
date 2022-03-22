// import styles from './about.module.scss';
import styles from '../../styles/about.module.scss'

export default function About() {
  return (
    <main className={ styles.mainContainer }>
      <h1>Que sou eu</h1>
      <div>
        <p>Me chamo <strong>Rafael Gerônimo</strong>, e sou um desenvolvedor de softwares recém formado.</p>
        <p>Tenho 38 anos, sou casado, tenho um filho adolescente e moramos em Curitiba, Paraná.</p>
        <p>Trabalho na área de tecnologia há mais de 15 anos, porém, nem sempre fui programador. Adquiri
          interesse na área de desenvolvimento ainda no começo dos anos 2000, quando fazia algumas páginas
          simples por hobby, mas trabalhei a maior parte do tempo com hardware e redes.</p>
        <p>Decidido a seguir um antigo sonho, ingressei através de uma bolsa no tecnólogo de Sistemas
          para Internet na Unicesumar e, um tempo depois de formado, entrei para o curso da Trybe, para
          aperfeiçoar os conhecimentos nas Hard Skills e também desenvolver as habilidades de Soft Skills.
        </p>
        <p>Durante os estudos, foram desenvolvidos mais de 30 projetos pela Trybe e outros tantos na Unicesumar.</p>
        <p>Atualmente, estou em busca da primeira oportunidade na área e procuro uma vaga para trabalhar
          como desenvolvedor, não tendo preferência entre front-end ou back-end.
        </p>
      </div>
    </main>
  )
}
