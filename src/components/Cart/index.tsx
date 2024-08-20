import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { cores } from '../../styles'
import { CartContainer, Overlay, Pedido, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => dispatch(remove(id))

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
          {items.length === 0 ? (
            <h4 style={{ color: `${cores.branco}` }}>
              Nenhum pedido adicionado!
            </h4>
          ) : (
            items.map((item) => (
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
                    <h3 style={{ marginBottom: '16px' }}>{item.nome}</h3>
                    <p>R$ {item.preco}0</p>
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
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </Pedido>
            ))
          )}
        </ul>

        <div style={{ display: 'block' }}>
          <div
            style={{
              display: 'flex',
              color: `${cores.branco}`,
              justifyContent: 'space-between',
              marginTop: '40px',
              alignItems: 'center'
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
