import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  border: 1px solid ${cores.rosaForte};
  margin-top: 48px;
  background-color: ${cores.branco};
  .containerInfos {
    padding: 8px;
    p {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
`
export const NomeNotaContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 18px;
  }
`

export const BotaoSaibaMais = styled.a`
  text-decoration: none;
  padding: 4px 6px;
  background-color: ${cores.rosaForte};
  color: ${cores.rosaClaro};
  font-weight: 700;
`

export const Categoria = styled.div`
  margin-top: 8px;
  margin-right: 8px;
  text-align: end;
`
