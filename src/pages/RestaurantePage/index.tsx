import BannerRestaurant from '../../components/BannerRestaurant'
import Cardapio from '../../components/Cardapio'
import HeaderPageRestaurant from '../../components/Header/HeaderPageRestaurant'
import OpcaoCardapio from '../../models/OpcaoCardapio'

type Props = {
  categoria: string
  nomeRestaurante: string
  imagemRestaurante: string
  itensCardapio: OpcaoCardapio[]
}

const RestaurantePage = ({
  categoria,
  nomeRestaurante,
  imagemRestaurante,
  itensCardapio
}: Props) => (
  <>
    <HeaderPageRestaurant />
    <BannerRestaurant
      categoria={categoria}
      nomeRestaurante={nomeRestaurante}
      imagemRestaurante={imagemRestaurante}
    />
    <Cardapio itensCardapio={itensCardapio} />
  </>
)

export default RestaurantePage
