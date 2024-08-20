import styled from 'styled-components'
import { cores, dimensoes } from '../../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.rosaClaro};
  height: 384px;
  .container {
    text-align: center;
    max-width: 539px;
  }

  img {
    margin-top: 40px;
    max-width: 125px;
    width: 100%;
    max-height: 57.5px;
  }
  h3 {
    margin-top: 138.5px;
    font-size: 36px;
    line-height: 42.19px;
    font-weight: 900;
  }

  @media (max-width: ${dimensoes.mobile}) {
    h3 {
      font-size: 21px;
      margin-top: 70px;
    }
    height: 309px;
  }
`
