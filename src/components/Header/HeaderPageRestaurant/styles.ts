import styled from 'styled-components'
import { cores, dimensoes } from '../../../styles'

export const HeaderRestauranteBar = styled.header`
  background-color: ${cores.rosaClaro};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    margin-top: 82px;
    text-align: center;
  }

  @media (max-width: ${dimensoes.mobile}) {
    h3 {
      font-size: 10px;
    }
  }

  img {
    max-width: 125px;
    width: 100%;
    max-height: 57.5px;
    margin-top: 63px;
    margin-bottom: 65.5px;
  }
`
