import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

    font-size: 12px;

    @media(min-width: 768px) {
      font-size: 16px;
    }
  }
  .themeChanger {
    background: none;
    border: none;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;

    position: absolute;
    top: 7rem;
    right: 2rem;

    z-index: 5;

    cursor: pointer;
  }

  body {
    background: ${props => props.theme.colors['background-1']};
    color: ${props => props.theme.colors['text-1']};
    font: ${props => props.theme.typography['font-1']};
  }

  h1 {
    font-size: ${props => props.theme.typography['headline-1']};
    color: ${props => props.theme.colors['text-1']};
    line-height: 4rem;
  }
  h2 {
    font-size: ${props => props.theme.typography['headline-2']};
    color: ${props => props.theme.colors['text-1']};
    line-height: 3rem;
  }
  h3 {
    font-size: ${props => props.theme.typography['headline-3']};
    color: ${props => props.theme.colors['text-1']};
    line-height: 3rem;
  }

  p {
    font-size: ${props => props.theme.typography.paragraph};
    font-weight: ${props => props.theme.typography['fw-400']};
  }

  button {
    font: ${props => props.theme.typography['font-1']};
    font-weight: ${props => props.theme.typography['fw-500']};
    word-break: keep-all;

    cursor: pointer;

    transition: ease 50ms;

    &:hover {
    transform: scale(104%);
    box-shadow: 1% 1% 5% rgba(0, 0, 0, 0.2),  -1% -1% 5% rgba(0, 0, 0, 0.2);
    }
    &:active {
      box-shadow: none;
      transform: none;
    }
  }

  input {
    border: 1px solid ${props => props.theme.colors['background-3']};
    transition: .1s;
    &:focus {
      border: 1px solid ${props => props.theme.colors.secondary};
    }
  }

  span {
    display: flex;
    align-items: center;
  }

  a {
    color:  ${props => props.theme.colors.secondary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
