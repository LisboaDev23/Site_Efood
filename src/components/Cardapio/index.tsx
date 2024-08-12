import { ContainerCardapio, Container, Modal, ConteudoModal } from './styles'

import ItemCardapio from '../ItemCardapio'
import close from '../../assets/images/close 1.png'
import { useEffect, useState } from 'react'
import { ItemCardapioRestaurante, RestauranteType } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  itensCardapio: ItemCardapioRestaurante[]
}

const Cardapio = ({ itensCardapio }: Props) => {
  const { id } = useParams()
  const [visivel, setVisivel] = useState(false)
  const [restaurante, setRestaurante] = useState<RestauranteType>()

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
        <Container className="container">
          <header>
            <div></div>
            <img
              onClick={() => {
                setVisivel(false)
              }}
              src={close}
              alt="Fechar"
              style={{ padding: '8px', paddingBottom: '0px' }}
            />
          </header>
          {itensCardapio.map((item) => (
            <ConteudoModal key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div style={{ maxWidth: '656px' }}>
                <h3>{item.nome}</h3>
                <p>
                  {item.descricao}
                  <br />
                  <br />
                  {item.porcao}
                </p>
                <button>Adicionar ao carrinho - R$ {item.preco}0</button>
              </div>
            </ConteudoModal>
          ))}
          <div className="overlay" onClick={() => setVisivel(false)}></div>
        </Container>
      </Modal>
    </>
  )
}

export default Cardapio
