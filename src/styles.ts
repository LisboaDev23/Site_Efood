import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaForte: '#E66767',
  branco: '#fff',
  rosaClaro: '#FFEBD9',
  rosaFundo: '#FFF8F2'
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
`
