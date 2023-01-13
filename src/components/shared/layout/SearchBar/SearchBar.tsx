import * as S from './SearchBar.styles'

export function SearchBar() {
  return (
    <S.Container>
      <label>Descreva seu insight:</label>
      <S.InputContainer>
        <S.Input />
        <S.CreateButton />
      </S.InputContainer>
    </S.Container>
  )
}