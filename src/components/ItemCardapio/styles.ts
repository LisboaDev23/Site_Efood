import styled from 'styled-components'
import { cores } from '../../styles'

export const Item = styled.li`
  background-color: ${cores.rosaForte};
  max-width: 320px;
  width: 100%;
  margin-bottom: 32px;

  img {
    padding: 8px;
    max-width: 304px;
    width: 100%;
    height: 167px;
  }
  h4 {
    color: ${cores.rosaClaro};
    font-size: 16px;
    margin-bottom: 8px;
    padding-left: 8px;
  }
  p {
    color: ${cores.rosaClaro};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
    padding: 0 8px;
  }

  button {
    margin-bottom: 8px;
    padding: 4px 84.76px 4px 83.24px;
    background-color: ${cores.rosaClaro};
    border: none;
    color: ${cores.rosaForte};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`
