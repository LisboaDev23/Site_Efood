import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosaForte};
  padding-top: 32px;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  button {
    background-color: ${cores.branco};
    width: 100%;
    border: none;
    color: ${cores.rosaForte};
    font-size: 14px;
    font-weight: 700;
    padding: 4px;
    margin-top: 16px;
    cursor: pointer;
  }
`

export const Pedido = styled.li`
  background-color: ${cores.branco};
  padding: 8px 12px 4px 8px;
  margin-bottom: 16px;
`
