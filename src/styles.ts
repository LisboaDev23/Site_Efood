import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaForte: '#E66767',
  branco: '#fff',
  rosaClaro: '#FFEBD9',
  rosaFundo: '#FFF8F2'
}

export const dimensoes = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
  body {
    background-color: ${cores.rosaFundo};
    color: ${cores.rosaForte};
  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${dimensoes.mobile}) {
    .container {
      max-width: 86%;
    }
  }

  @media (max-width: ${dimensoes.tablet}) {
    .container {
      max-width: 86%;
    }
  }

  @media (min-width: 769px) {
    .container {
      max-width: 93%;
    }
  }

`
