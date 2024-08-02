import { ContainerCardapio } from './styles'
import ItemCardapio from '../ItemCardapio'
import OpcaoCardapio from '../../models/OpcaoCardapio'

type Props = {
  itensCardapio: OpcaoCardapio[]
}

const Cardapio = ({ itensCardapio }: Props) => (
  <section className="container">
    <ContainerCardapio>
      {itensCardapio.map((item) => (
        <ItemCardapio
          nomeItem={item.nomePrato}
          imagemItem={item.imagem}
          descricaoItem={item.descricaoPrato}
          key={item.nomePrato}
        />
      ))}
    </ContainerCardapio>
  </section>
)

export default Cardapio
