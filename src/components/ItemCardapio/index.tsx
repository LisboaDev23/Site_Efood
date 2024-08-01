import { Item } from './styles'

type Props = {
  imagemItem: string
  nomeItem: string
  descricaoItem: string
}

const ItemCardapio = ({ nomeItem, imagemItem, descricaoItem }: Props) => (
  <Item>
    <div style={{ textAlign: 'center' }}>
      <img src={imagemItem} alt={nomeItem} />
    </div>
    <h4>{nomeItem}</h4>
    <p>{descricaoItem}</p>
    <div style={{ textAlign: 'center' }}>
      <button>Adicionar ao carrinho</button>
    </div>
  </Item>
)

export default ItemCardapio
