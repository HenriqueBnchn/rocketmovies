import { styled } from "styled-components";
import sala_cinema from '../../assets/sala_cinema.png'


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 48px;
    line-height: 1;
  }
  h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    margin: 48px 0;
  }
  span{
    color: ${({ theme }) => theme.COLORS.GRAY_3};
    font-size: 14px;
  }

  Button{
    margin-top: 24px;
  }

  a{
    color: ${({ theme }) => theme.COLORS.PINK_100};
    text-align: center;
    justify-content: center;
    margin-top: 48px;
  }
`

export const Background = styled.div`
  flex: 2;
  height: 100%;
  background: url(${sala_cinema}) no-repeat center;
  background-size: cover;
`