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

    .main_title{
      margin: 48px 0;
      display: flex;
      justify-content: space-between;
      color: ${({ theme }) => theme.COLORS.WHITE};
      
      h1{
        font-weight: 300;
      }
    }
  }
`

export const Button = styled.button`
  height: 48px;
  width: 220px;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;

  svg{
    font-size: 20px;
  }
`


export const FilmsContainer = styled.div`
  display: flex;
  gap: 24px;

  flex-direction: column;
  overflow-y: auto;

  padding-right: 8px;
`
