import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_2};
  color: ${({ theme }) => theme.COLORS.GRAY_3};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_3}` : "none"};

  border-radius: 10px;
  padding:  10px 16px;

  >button {
    border: none;
    background: none;
    height: 28px;
    svg{
      width: 30px;
      height: 28px;
    }
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.PINK_100}
  }
 
  .button-delete{
    color: ${({ theme }) => theme.COLORS.PINK_100}
  }

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_3};
      font-family: 'Roboto',serif !important;
    }
  }
`