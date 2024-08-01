import { Container, HeaderRestauranteBar } from './styles'
import fundoHeader from '../../../assets/images/Vector.svg'
import logo from '../../../assets/images/logo.svg'

const HeaderPageRestaurant = () => (
  <HeaderRestauranteBar style={{ backgroundImage: `url(${fundoHeader})` }}>
    <Container className="container">
      <h3>Restaurante</h3>
      <img src={logo} alt="Efood" />
      <h3>0 produto(s) no carrinho</h3>
    </Container>
  </HeaderRestauranteBar>
)

export default HeaderPageRestaurant
