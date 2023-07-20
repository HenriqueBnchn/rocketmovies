import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.GRAY_1};
    -webkit-font-smoothing: antialised;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px transparent; 
      border-radius: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK_100}; 
      border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.COLORS.PINK_80}; 
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
    border: none;
  }


  a{
    text-decoration: none;
  }
  
  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }


  button:hover, a:hover{
    filter: brightness(0.9);
  }
  
`