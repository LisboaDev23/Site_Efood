import { ContainerCardapio, Container, Modal, ConteudoModal } from './styles'
import { useParams } from 'react-router-dom'

import ItemCardapio from '../ItemCardapio'
import close from '../../assets/images/close 1.png'
import pizza from '../../assets/images/image 3.png'
import { useState } from 'react'
import { ItemCardapioRestaurante } from '../../pages/Home'

type Props = {
  itensCardapio: ItemCardapioRestaurante[]
}

const Cardapio = ({ itensCardapio }: Props) => {
  const [visivel, setVisivel] = useState(false)
  const { id } = useParams()

  return (
    <>
      <section className="container">
        <ContainerCardapio>
          {itensCardapio.map((item) => (
            <ItemCardapio
              nomeItem={item.nome}
              imagemItem={item.foto}
              descricaoItem={item.descricao}
              porcaoItem={item.porcao}
              precoItem={item.preco}
              key={item.id}
            />
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
          <ConteudoModal>
            <img src={pizza} alt="" />
            <div style={{ maxWidth: '656px' }}>
              <h3>Pizza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                unde fugiat voluptatum voluptas atque nihil ea illum quo
                dignissimos! Ea tempora dolores iusto minus temporibus cum quasi
                magnam quod quibusdam? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Deserunt numquam quam enim cumque veniam
                sapiente velit placeat rerum deleniti, assumenda magni minima
                magnam inventore adipisci nam corrupti a cum iste. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deleniti harum
                omnis dolor optio. Animi nulla illo maxime minus fugit omnis sed
                dolore ipsam nemo ratione, rerum molestias ipsum atque facere?
                <br />
                <br />
                de fere
              </p>
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
          </ConteudoModal>
          <div className="overlay"></div>
        </Container>
      </Modal>
    </>
  )
}

export default Cardapio
