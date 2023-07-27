import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function PostTitle({ children }: Props) {
  return (
    <h1>
      {children}
    </h1>
  )
}
