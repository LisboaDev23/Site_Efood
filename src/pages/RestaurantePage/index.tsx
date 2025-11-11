import BannerRestaurant from '../../components/BannerRestaurant'
import Cardapio from '../../components/Cardapio'
import HeaderPageRestaurant from '../../components/Header/HeaderPageRestaurant'
import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../services/api'

const RestaurantePage = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantByIdQuery(id! ?? '')

  if (!restaurante) {
    return <h4>Carregando ...</h4>
  }
  return (
    <>
      <HeaderPageRestaurant />
      <BannerRestaurant
        categoria={restaurante.tipo}
        nomeRestaurante={restaurante.titulo}
        imagemRestaurante={restaurante.capa}
      />
      <Cardapio />
    </>
  )
}

export default RestaurantePage
