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
    height: 100%;
    grid-area: content;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 64px;

    >h1{
      font-weight: 500;
      font-size: 36px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin: 20px 0 30px;
    }
  
  }

  .rolagem_y{
    overflow-y: auto;
    padding-right: 16px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  height: 100%;

  

  .col2{
    display: flex;
    gap: 40px;
    justify-content: space-between;

    Button:first-child{
      color:  ${({theme}) => theme.COLORS.PINK_100};;
      background-color:  ${({theme}) => theme.COLORS.BLACK};
    }
  }

  input::placeholder{
    font-family: 'Roboto',serif !important;
  }

  .marcadores{
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1{
      font-size: 20px;
      font-weight: 300;
      color: ${({theme}) => theme.COLORS.GRAY_3};
    }

    .marcadores_fundo{
      background-color: ${({theme}) => theme.COLORS.BLACK};
      border-radius: 10px;
      display: flex;
      gap: 24px;
      align-items: center;
      padding: 16px;
    }

    .marcadores_item{
      input{
        width: 120px;
      }
    }
  }
`