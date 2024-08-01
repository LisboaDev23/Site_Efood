import { ContainerCardapio } from './styles'
import ItemCardapio from '../ItemCardapio'
import OpcaoCardapio from '../../models/OpcaoCardapio'
import marguerita from '../../assets/images/pizza-item-cardapio.jpg'

const pizzaMarguerita: OpcaoCardapio = {
  nomePrato: 'Pizza Marguerita',
  descricaoPrato:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  imagem: marguerita
}

const Cardapio = () => (
  <section className="container">
    <ContainerCardapio>
      <ItemCardapio
        nomeItem={pizzaMarguerita.nomePrato}
        descricaoItem={pizzaMarguerita.descricaoPrato}
        imagemItem={pizzaMarguerita.imagem}
      />
      <ItemCardapio
        nomeItem={pizzaMarguerita.nomePrato}
        descricaoItem={pizzaMarguerita.descricaoPrato}
        imagemItem={pizzaMarguerita.imagem}
      />
      <ItemCardapio
        nomeItem={pizzaMarguerita.nomePrato}
        descricaoItem={pizzaMarguerita.descricaoPrato}
        imagemItem={pizzaMarguerita.imagem}
      />
      <ItemCardapio
        nomeItem={pizzaMarguerita.nomePrato}
        descricaoItem={pizzaMarguerita.descricaoPrato}
        imagemItem={pizzaMarguerita.imagem}
      />
      <ItemCardapio
        nomeItem={pizzaMarguerita.nomePrato}
        descricaoItem={pizzaMarguerita.descricaoPrato}
        imagemItem={pizzaMarguerita.imagem}
      />
      <ItemCardapio
        nomeItem={pizzaMarguerita.nomePrato}
        descricaoItem={pizzaMarguerita.descricaoPrato}
        imagemItem={pizzaMarguerita.imagem}
      />
    </ContainerCardapio>
  </section>
)

export default Cardapio
