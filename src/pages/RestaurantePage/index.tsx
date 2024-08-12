import { useEffect, useState } from 'react'
import BannerRestaurant from '../../components/BannerRestaurant'
import Cardapio from '../../components/Cardapio'
import HeaderPageRestaurant from '../../components/Header/HeaderPageRestaurant'
import { ItemCardapioRestaurante, RestauranteType } from '../Home'
import { useParams } from 'react-router-dom'

type Props = {
  categoria: string
  nomeRestaurante: string
  imagemRestaurante: string
  restauranteProp: RestauranteType
}

const RestaurantePage = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resposta) => resposta.json())
      .then((resposta) => setRestaurante(resposta))
  }, [id])

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
