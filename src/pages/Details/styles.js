import { styled } from "styled-components";



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 128px 48px;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  main{
    grid-area: content;
    overflow-y: auto;
  }

`

export const Content = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;

    .main_title{
      margin: 24px 0;
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      color: #F4EDE8;
      align-items: center;
      
      h1{
        font-weight: 500;
        font-size: 36px;
      }
    }

    .rating{
      display: flex;
      gap: 6px;

      svg{
        height: 24px;
        width: 24px;
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
  }

  .item_dados{
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: 'Roboto',serif;

    img{
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    svg{
      fill: ${({theme}) => theme.COLORS.PINK_100};
    }
  }

  .descricao{
    color: ${({theme}) => theme.COLORS.WHITE};
    text-align: justify;
    padding-right: 16px;
    overflow-y: auto;
  }

`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin: 40px 0;

  >div{
    background-color: ${({theme}) => theme.COLORS.PINK_5} !important;
  }
`
