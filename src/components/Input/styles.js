import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 10px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  color: ${({ theme }) => theme.COLORS.GRAY_3};

  margin-bottom: 8px;
  input{
    height: 56px;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 16px;
    width: 100%;

    ::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_3};
    }
  }


  ::-ms-reveal {
      filter: drop-shadow(0px 1px 3px ${({theme}) => theme.COLORS.PINK_100});
    }

  >svg{
      margin-left: 16px;
    }
`