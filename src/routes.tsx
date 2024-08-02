import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import RestaurantePage from './pages/RestaurantePage'
import Restaurante from './models/Restaurante'
import fundoRestaurantae from './assets/images/fundo-macarrão.png'
import notaBaixa from './assets/images/notaBaixa.svg'
import sushi from './assets/images/sushi.png'
import notaAlta from './assets/images/nota.svg'
import marguerita from './assets/images/pizza-item-cardapio.jpg'
import OpcaoCardapio from './models/OpcaoCardapio'

const restauranteJapones: Restaurante = {
  id: 1,
  nome: 'Hioki Sushi',
  descricao:
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  imagem: sushi,
  nota: notaAlta,
  infos: ['Destaque da semana', 'Japonesa'],
  link: '/hiokiSushi'
}

const restauranteItaliano: Restaurante = {
  id: 2,
  nome: 'La Dolce Vita Trattoria',
  descricao:
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  imagem: fundoRestaurantae,
  nota: notaBaixa,
  infos: ['Italiana'],
  link: '/laDolceVitaTrattoria'
}

const itensCardapioSushi: OpcaoCardapio[] = [
  {
    nomePrato: 'Sashimi Salmão',
    descricaoPrato:
      'Deliciosos cortes de sashimis de salmão fresco com um bom toque de molho tarê ou shoyu',
    imagem: sushi
  },
  {
    nomePrato: 'Sashimi Salmão',
    descricaoPrato:
      'Deliciosos cortes de sashimis de salmão fresco com um bom toque de molho tarê ou shoyu',
    imagem: sushi
  },
  {
    nomePrato: 'Sashimi Salmão',
    descricaoPrato:
      'Deliciosos cortes de sashimis de salmão fresco com um bom toque de molho tarê ou shoyu',
    imagem: sushi
  },
  {
    nomePrato: 'Sashimi Salmão',
    descricaoPrato:
      'Deliciosos cortes de sashimis de salmão fresco com um bom toque de molho tarê ou shoyu',
    imagem: sushi
  },
  {
    nomePrato: 'Sashimi Salmão',
    descricaoPrato:
      'Deliciosos cortes de sashimis de salmão fresco com um bom toque de molho tarê ou shoyu',
    imagem: sushi
  },
  {
    nomePrato: 'Sashimi Salmão',
    descricaoPrato:
      'Deliciosos cortes de sashimis de salmão fresco com um bom toque de molho tarê ou shoyu',
    imagem: sushi
  }
]

const itensCardapioItaliano: OpcaoCardapio[] = [
  {
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: marguerita
  },
  {
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: marguerita
  },
  {
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: marguerita
  },
  {
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: marguerita
  },
  {
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: marguerita
  },
  {
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: marguerita
  }
]

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/hiokiSushi"
      element={
        <RestaurantePage
          itensCardapio={itensCardapioSushi}
          nomeRestaurante={restauranteJapones.nome}
          imagemRestaurante={restauranteJapones.imagem}
          categoria={restauranteJapones.infos[1]}
        />
      }
    />
    <Route
      path="/laDolceVitaTrattoria"
      element={
        <RestaurantePage
          itensCardapio={itensCardapioItaliano}
          nomeRestaurante={restauranteItaliano.nome}
          imagemRestaurante={restauranteItaliano.imagem}
          categoria={restauranteItaliano.infos[0]}
        />
      }
    />
  </Routes>
)

export default Rotas
