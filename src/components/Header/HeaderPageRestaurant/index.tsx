import { Container, HeaderRestauranteBar } from './styles'
import fundoHeader from '../../../assets/images/Vector.svg'
import logo from '../../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'

const HeaderPageRestaurant = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderRestauranteBar style={{ backgroundImage: `url(${fundoHeader})` }}>
      <Container className="container">
        <h3>Restaurante</h3>
        <img src={logo} alt="Efood" />
        <h3
          style={{ cursor: 'pointer' }}
          onClick={() => {
            dispatch(open())
          }}
        >
          {items.length} produto(s) no carrinho
        </h3>
      </Container>
    </HeaderRestauranteBar>
  )
}

export default HeaderPageRestaurant
