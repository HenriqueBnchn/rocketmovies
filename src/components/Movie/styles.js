import { styled } from "styled-components";



export const Container = styled.div`
  width: 100%;
  height: 220px;
  padding: 32px;
  border-radius: 16px;
  


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  align-items: start;

  background-color: ${({ theme }) => theme.COLORS.PINK_5};

  .film_title{
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    h1{
      line-height: 1;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 24px;
      font-weight: 700;
    }

    .rating{
      display: flex;
      gap: 6px;

      svg{
        height: 18px;
        width: 18px;
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
`



export const Description = styled.div`
  max-height: 58px;
  overflow-y: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_3};
`
