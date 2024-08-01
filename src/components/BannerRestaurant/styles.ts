import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerBanner = styled.div`
  color: ${cores.branco};
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 32px;
  }
`
export const Categoria = styled.h1`
  font-weight: 100;
  padding-top: 25px;
  padding-bottom: 156.5px;
`

export const NomeRestaurante = styled.h1`
  font-weight: bold;
`
