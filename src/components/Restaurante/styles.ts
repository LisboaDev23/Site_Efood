import styled from 'styled-components'
import { cores, dimensoes } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.rosaForte};
  margin-top: 48px;
  background-color: ${cores.branco};
  position: relative;

  .containerInfos {
    padding: 8px;
    p {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
  > img {
    max-width: 472px;
    width: 100%;
    height: 217px;
  }
`
export const NomeNotaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    font-size: 18px;
  }
  img {
    margin-left: 8px;
  }
`

export const BotaoSaibaMais = styled.a`
  padding: 4px 6px;
  background-color: ${cores.rosaForte};
  color: ${cores.rosaClaro};
  font-weight: 700;
  text-decoration: none;
`

export const Categoria = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  div {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
`
