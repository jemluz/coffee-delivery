import { createGlobalStyle } from 'styled-components'

// font-family: 'Baloo 2', cursive;
// font-family: 'Roboto', sans-serif;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-700']};
    border-radius: 8px;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['brown-500']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`