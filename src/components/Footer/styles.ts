import styled from 'styled-components'
import { dimensoes } from '../../styles'

export const ContainerFooter = styled.footer`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const ContainerLogoRedes = styled.div`
  display: block;
  margin-bottom: 80px;

  @media (max-width: ${dimensoes.mobile}) {
    margin-bottom: 40px;
  }
`

export const LogoFooter = styled.img`
  margin-bottom: 32px;
`
