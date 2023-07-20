import { styled } from "styled-components";

export const Container = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 10px;
  font-weight: 500;
  gap: 6px;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  svg{
    width: 30px;
    height: 28px;
  }
`