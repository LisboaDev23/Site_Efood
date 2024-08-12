import { Item } from './styles'

type Props = {
  nomeItem: string
  precoItem: number
  porcaoItem: string
  imagemItem: string
  descricaoItem: string
}

const ItemCardapio = ({ nomeItem, imagemItem, descricaoItem }: Props) => (
  <Item style={{ cursor: 'pointer' }}>
    <div style={{ textAlign: 'center' }}>
      <img src={imagemItem} alt={nomeItem} />
    </div>
    <h4>{nomeItem}</h4>
    <p>{descricaoItem}</p>
    <div style={{ textAlign: 'center' }}>
      <button>Mais detalhes</button>
    </div>
  </Item>
)

export default ItemCardapio
