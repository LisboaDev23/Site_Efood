import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { cores } from '../../styles'
import { formataPreco } from '../Cardapio'
import { CartContainer, Overlay, Pedido, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { openInfosEntrega } from '../../store/reducers/checkout'
import { ItemCardapioRestaurante } from '../../pages/Home'

export const calculaTotalCarrinho = (carrinho: ItemCardapioRestaurante[]) => {
  let acumulador = 0
  carrinho.forEach((item) => {
    acumulador += item.preco
  })
  return acumulador
}

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const abrirInformacoesEntrega = () => {
    dispatch(openInfosEntrega())
  }

  const removeItem = (id: number) => dispatch(remove(id))

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
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
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
            <p>{formataPreco(calculaTotalCarrinho(items))}</p>
          </div>
          <div>
            {items.length > 0 ? (
              <button
                onClick={() => {
                  abrirInformacoesEntrega()
                  closeCart()
                }}
              >
                Continuar com a entrega
              </button>
            ) : (
              <h4
                style={{
                  color: cores.branco,
                  marginTop: '24px',
                  textAlign: 'center'
                }}
              >
                Adicione pelo menos um item no carrinho para prosseguir
              </h4>
            )}
          </div>
        </div>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
