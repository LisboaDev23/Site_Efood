import {
  ContainerCardapio,
  Modal,
  ConteudoModal,
  ContainerInfosItem
} from './styles'

import ItemCardapio from '../ItemCardapio'
import close from '../../assets/images/close 1.png'
import { useEffect, useState } from 'react'
import { ItemCardapioRestaurante, RestauranteType } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  itensCardapio: ItemCardapioRestaurante[]
}

const Cardapio = () => {
  const { id } = useParams()
  const [visivel, setVisivel] = useState(false)
  const [restaurante, setRestaurante] = useState<RestauranteType>()
  const [item, setItem] = useState<ItemCardapioRestaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resposta) => resposta.json())
      .then((resposta) => setRestaurante(resposta))
  }, [id])

  return (
    <>
      <section className="container">
        <ContainerCardapio>
          {restaurante?.cardapio.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setVisivel(true)
                setItem(item)
              }}
            >
              <ItemCardapio
                nomeItem={item.nome}
                imagemItem={item.foto}
                descricaoItem={item.descricao}
                porcaoItem={item.porcao}
                precoItem={item.preco}
              />
            </div>
          ))}
        </ContainerCardapio>
      </section>

      <Modal className={visivel ? 'visivel' : ''}>
        <ConteudoModal className="container">
          <div>
            <header>
              <div></div>
              <img
                onClick={() => {
                  setVisivel(false)
                }}
                src={close}
                alt="Fechar"
                style={{
                  cursor: 'pointer'
                }}
              />
            </header>
          </div>

          <ContainerInfosItem>
            <img src={item?.foto} alt={item?.nome} />
            <div style={{ maxWidth: '656px', marginLeft: '24px' }}>
              <h3>{item?.nome}</h3>
              <p>
                {item?.descricao}
                <br />
                <br />
                {item?.porcao}
              </p>
              <button>Adicionar ao carrinho - R$ {item?.preco}0</button>
            </div>
          </ContainerInfosItem>
        </ConteudoModal>
        <div className="overlay" onClick={() => setVisivel(false)}></div>
      </Modal>
    </>
  )
}

export default Cardapio
