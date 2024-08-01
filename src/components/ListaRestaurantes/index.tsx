import Restaurant from '../../models/Restaurante'
import Restaurante from '../Restaurante'
import { Container, Lista } from './styles'

type Props = {
  restaurantes: Restaurant[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <Lista>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            nome={restaurante.nome}
            descricao={restaurante.descricao}
            imagem={restaurante.imagem}
            infos={restaurante.infos}
            nota={restaurante.nota}
            link={restaurante.link}
          />
        ))}
      </Lista>
    </div>
  </Container>
)

export default ListaRestaurantes
