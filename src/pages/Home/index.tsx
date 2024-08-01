import ListaRestaurantes from '../../components/ListaRestaurantes'
import Restaurante from '../../models/Restaurante'

import sushi from '../../assets/images/sushi.png'
import italiana from '../../assets/images/macarrão.png'
import notaAlta from '../../assets/images/nota.svg'
import notaBaixa from '../../assets/images/notaBaixa.svg'
import Header from '../../components/Header/HeaderMain'

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: sushi,
    nota: notaAlta,
    infos: ['Destaque da semana', 'Japonesa'],
    link: '/hiokiSushi'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: italiana,
    nota: notaBaixa,
    infos: ['Italiana'],
    link: '/laDolceVitaTrattoria'
  },
  {
    id: 3,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: italiana,
    nota: notaBaixa,
    infos: ['Italiana'],
    link: '/laDolceVitaTrattoria'
  },
  {
    id: 4,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: italiana,
    nota: notaBaixa,
    infos: ['Italiana'],
    link: '/laDolceVitaTrattoria'
  },
  {
    id: 5,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: italiana,
    nota: notaBaixa,
    infos: ['Italiana'],
    link: '/laDolceVitaTrattoria'
  },
  {
    id: 6,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: italiana,
    nota: notaBaixa,
    infos: ['Italiana'],
    link: '/laDolceVitaTrattoria'
  }
]

const Home = () => (
  <>
    <Header />
    <ListaRestaurantes restaurantes={restaurantes} />
  </>
)

export default Home
