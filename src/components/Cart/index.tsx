import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'
import pizza from '../../assets/images/pizza-item-cardapio.jpg'
import { cores } from '../../styles'
import { CartContainer, Overlay, Pedido, Sidebar } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <Pedido>
            <div style={{ display: 'flex' }}>
              <img
                style={{
                  maxWidth: '80px',
                  width: '100%',
                  height: '80px'
                }}
                src={pizza}
                alt=""
              />
              <div style={{ marginLeft: '8px' }}>
                <h3 style={{ marginBottom: '16px' }}>Pizza Marguerita</h3>
                <p>R$ 60,90</p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end'
              }}
            >
              <img src={excluir} alt="" />
            </div>
          </Pedido>

          <Pedido>
            <div style={{ display: 'flex' }}>
              <img
                style={{
                  maxWidth: '80px',
                  width: '100%',
                  height: '80px'
                }}
                src={pizza}
                alt=""
              />
              <div style={{ marginLeft: '8px' }}>
                <h3 style={{ marginBottom: '16px' }}>Pizza Marguerita</h3>
                <p>R$ 60,90</p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end'
              }}
            >
              <img src={excluir} alt="" />
            </div>
          </Pedido>
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
            <p>R$ 182,70</p>
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
