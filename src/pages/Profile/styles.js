import { styled } from "styled-components";



export const Container = styled.div`
  width: 100%;

  header{
    height: 144px;
    padding: 0 144px;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.PINK_5};


    a{
      line-height: 0;
      color: ${({ theme }) => theme.COLORS.PINK_100};
      display: flex;
      align-items: center;
    }


  }
`

export const Form = styled.form`
  width: fit-content;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .passwords{
    margin: 24px 0;
    width: 100%;
  }
`

export const Avatar = styled.div`
  margin-top: -64px;
  margin-bottom: 64px;
  position: relative;
  display: flex;
  width: 186px;
  height: 186px;

  img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label{
    position: absolute;
    bottom: 0px;
    right: 7px;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      cursor: pointer;
    }

    svg{
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }


  }

  input{
    display: none;
  }
`