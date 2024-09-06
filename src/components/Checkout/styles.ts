import styled from 'styled-components'
import { cores, dimensoes } from '../../styles'

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.checkout-visivel {
    display: flex;
  }
`

export const ContainerFormEntrega = styled.div`
  display: none;

  &.visivel {
    display: block;
  }
`

export const ContainerFormPagamento = styled.div`
  color: ${cores.branco};
  display: none;

  &.visivel {
    display: block;
  }
`

export const ContainerPagConcluido = styled.div`
  > h3 {
    margin-bottom: 16px;
  }
  > buttom {
    margin-top: 8px;
  }
  display: block;
  color: ${cores.branco};
`

export const TextoPagConcluido = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`

export const InputInfo = styled.div`
  display: grid;
  label {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
  }
  input {
    padding: 8px;
    border: none;

    &.error {
      border: 3px solid red;
    }
  }

  span {
    font-size: 12px;
  }
`

export const InputInfoTwoCamps = styled.div`
  &.cvv {
    @media (max-width: ${dimensoes.mobile}) {
      display: block;
    }
  }
  display: flex;
  justify-content: space-between;
  div {
    max-width: 155px;
    @media (max-width: ${dimensoes.mobile}) {
      max-width: 100px;
    }
  }
  label {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
  }
  input {
    padding: 8px;
    border: none;
    max-width: 100%;
    &.error {
      border: 3px solid red;
    }
  }
  span {
    font-size: 12px;
  }
`

export const FormularioInfos = styled.form`
  margin-top: 16px;
  color: ${cores.branco};

  button {
    margin-top: 8px;
  }
  ${InputInfo}, ${InputInfoTwoCamps} {
    margin-bottom: 8px;
  }
`
