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
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ConteudoModal = styled.div`
  background-color: ${cores.rosaForte};
  color: ${cores.branco};
  padding: 32px;
  padding-top: 0px;
  padding-right: 0px;
  display: block;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;

    img {
      padding-top: 8px;
      padding-right: 8px;
    }
  }

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
    max-width: 228px;
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

export const ContainerInfosItem = styled.div`
  > img {
    height: 280px;
    max-width: 280px;
    width: 100%;
  }
  display: flex;
`
