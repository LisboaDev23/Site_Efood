import { Categoria, ContainerBanner, NomeRestaurante } from './styles'

type Props = {
  categoria: string
  nomeRestaurante: string
  imagemRestaurante: string
}

export const BannerRestaurant = ({
  categoria,
  imagemRestaurante,
  nomeRestaurante
}: Props) => (
  <ContainerBanner style={{ backgroundImage: `url(${imagemRestaurante})` }}>
    <div className="container">
      <div>
        <Categoria>{categoria}</Categoria>
      </div>
      <div>
        <NomeRestaurante>{nomeRestaurante}</NomeRestaurante>
      </div>
    </div>
  </ContainerBanner>
)

export default BannerRestaurant
