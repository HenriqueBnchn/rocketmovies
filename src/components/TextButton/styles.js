import { styled } from "styled-components";



export const Container = styled.div`
  a{
    color: ${({ theme }) => theme.COLORS.PINK_100};
    text-align: center;
    margin-top: 38px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 0;
    gap: 12px;
  }
`