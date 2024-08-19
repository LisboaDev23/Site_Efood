import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { cores } from '../../styles'
import { CartContainer, Overlay, Pedido, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const calculaTotalCarrinho = () => {
    let acumulador = 0
    items.forEach((item) => {
      acumulador += item.preco
    })
    return acumulador
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Pedido key={item.nome}>
              <div style={{ display: 'flex' }}>
                <img
                  style={{
                    maxWidth: '80px',
                    width: '100%',
                    height: '80px'
                  }}
                  src={item.foto}
                  alt={item.descricao}
                />
                <div style={{ marginLeft: '8px' }}>
                  <h3 style={{ marginBottom: '16px' }}>{}</h3>
                  <p>R$ {item.preco}</p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <img
                  src={excluir}
                  alt="Remover pedido"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Pedido>
          ))}
        </ul>

        <div style={{ display: 'block' }}>
          <div
            style={{
              display: 'flex',
              color: `${cores.branco}`,
              justifyContent: 'space-between',
              marginTop: '40px'
            }}
          >
            <p>Valor total</p>
            <p>R$ {calculaTotalCarrinho()}</p>
          </div>
          <div>
            <button>Continuar com a entrega</button>
          </div>
        </div>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
