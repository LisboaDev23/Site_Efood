import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header/HeaderMain'
import { useEffect, useState } from 'react'

export type ItemCardapioRestaurante = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

//vamos criar um tipo aonde ele irá representar todos os atributos da requisição
export type RestauranteType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapioRestaurante[]
  link: string
  infos: string[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((resposta) => setRestaurantes(resposta))
  }, [])

  return (
    <>
      <Header />
      <ListaRestaurantes restaurantes={restaurantes} />
    </>
  )
}

export default Home
