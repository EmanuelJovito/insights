import { ReactNode } from 'react'
import * as S from './Page.styles'

type PageProps = {
  children: ReactNode
}

export function Page(props: PageProps) {
  return <S.Container>{props.children}</S.Container>
}