import { styled } from "styled-components";



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 16px;
  border-radius: 10px;

  background-color: ${({theme}) => theme.COLORS.GRAY_1};
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 12px;
  font-family: 'Roboto', serif;
`
