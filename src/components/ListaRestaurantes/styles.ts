import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.rosaFundo};
  margin-bottom: 120px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
`
