import { ReactNode } from "react"

type PostTitleProps = {
  children?: ReactNode
}

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <h1>
      {children}
    </h1>
  )
}
