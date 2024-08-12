import { useEffect, useState } from 'react'
import BannerRestaurant from '../../components/BannerRestaurant'
import Cardapio from '../../components/Cardapio'
import HeaderPageRestaurant from '../../components/Header/HeaderPageRestaurant'
import { ItemCardapioRestaurante, RestauranteType } from '../Home'

type Props = {
  categoria: string
  nomeRestaurante: string
  imagemRestaurante: string
  itensCardapio: ItemCardapioRestaurante[]
}

const RestaurantePage = ({
  categoria,
  nomeRestaurante,
  imagemRestaurante,
  itensCardapio
}: Props) => {
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  }, [])

  return (
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
}

export default RestaurantePage
