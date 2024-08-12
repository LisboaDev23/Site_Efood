import { RestauranteType } from '../../pages/Home'
import Restaurante from '../Restaurante'
import { Container, Lista } from './styles'

type Props = {
  restaurantes: RestauranteType[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <Lista>
          {restaurantes.map((restaurante) => (
            <Restaurante
              key={restaurante.id}
              id={restaurante.id}
              nome={restaurante.titulo}
              descricao={restaurante.descricao}
              imagem={restaurante.capa}
              destacado={restaurante.destacado}
              tipo={restaurante.tipo}
              nota={restaurante.avaliacao}
              link={`restaurante/${restaurante.id}`}
            />
          ))}
        </Lista>
      </div>
    </Container>
  )
}

export default ListaRestaurantes
