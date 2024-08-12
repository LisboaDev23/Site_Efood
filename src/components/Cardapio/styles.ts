import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCardapio = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
  margin-bottom: 88px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  .visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const Container = styled.div`
  background-color: ${cores.rosaForte};
  color: ${cores.branco};
  header {
    display: flex;
    justify-content: space-between;
  }
`

export const ConteudoModal = styled.div`
  padding: 32px;
  padding-top: 0px;
  display: flex;
  z-index: 1;

  h3 {
    font-weight: 900;
    font-size: 18px;
  }

  > img {
    margin-right: 24px;
    max-width: 280px;
    height: 280px;
  }
  button {
    max-width: 218px;
    margin-top: 16px;
    padding: 4px 6.95px 4px 7.05px;
    background-color: ${cores.rosaClaro};
    border: none;
    color: ${cores.rosaForte};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
  p {
    margin-top: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`
