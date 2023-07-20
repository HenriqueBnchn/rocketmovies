import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 230px;
  min-height: 230px;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;
`