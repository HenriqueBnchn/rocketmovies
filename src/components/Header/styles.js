import { styled } from "styled-components";



export const Container = styled.header`
  grid-area: header;

  height: 115px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};


  h1{
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  Input{
    font-size: 14px;
    padding: 0 24px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .text{
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    h1{
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      inline-size: max-content;
    }

    a{
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_3};
    }
  }
  img{
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`