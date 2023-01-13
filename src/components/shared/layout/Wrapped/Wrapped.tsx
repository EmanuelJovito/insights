import { ReactNode } from 'react'
import * as S from './Wrapped.styles'

interface WrappedProps {
  children: ReactNode
}

export function Wrapped({ children }: WrappedProps) {
  return (
    <S.Container>{children}</S.Container>
  )
}