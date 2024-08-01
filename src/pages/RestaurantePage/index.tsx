import BannerRestaurant from '../../components/BannerRestaurant'
import Cardapio from '../../components/Cardapio'
import HeaderPageRestaurant from '../../components/Header/HeaderPageRestaurant'

type Props = {
  categoria: string
  nomeRestaurante: string
  imagemRestaurante: string
}

const RestaurantePage = ({
  categoria,
  nomeRestaurante,
  imagemRestaurante
}: Props) => (
  <>
    <HeaderPageRestaurant />
    <BannerRestaurant
      categoria={categoria}
      nomeRestaurante={nomeRestaurante}
      imagemRestaurante={imagemRestaurante}
    />
    <Cardapio />
  </>
)

export default RestaurantePage
