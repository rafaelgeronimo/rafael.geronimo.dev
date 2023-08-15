import { ReactNode, FunctionComponent } from "react";
import styles from '../../styles/blog.module.scss'

type ContainerProps = {
  children?: ReactNode
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className={ styles.container }>{children}</div>
}

export default Container
