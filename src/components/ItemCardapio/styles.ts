import styled from 'styled-components'
import { cores, dimensoes } from '../../styles'

export const Item = styled.li`
  background-color: ${cores.rosaForte};
  max-width: 100%;
  margin-bottom: 32px;

  .containerInfos {
    max-width: 304px;
    margin: 0 auto;
  }

  @media (max-width: ${dimensoes.mobile}) {
    .containerInfos {
      width: 100%;
    }
  }

  img {
    padding-top: 8px;
    width: 100%;
    height: 167px;
  }
  h4 {
    color: ${cores.rosaClaro};
    font-size: 16px;
    margin-bottom: 8px;
  }
  p {
    color: ${cores.rosaClaro};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    margin-bottom: 8px;
    max-width: 304px;
    width: 100%;
    padding: 4px 84.76px 4px 83.24px;
    background-color: ${cores.rosaClaro};
    border: none;
    color: ${cores.rosaForte};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`
