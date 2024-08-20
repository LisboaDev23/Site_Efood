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
    <div className="containerInfos">
      <div style={{ textAlign: 'center' }}>
        <img src={imagemItem} alt={nomeItem} />
      </div>
      <h4>{nomeItem}</h4>
      <p>{descricaoItem}</p>
      <div>
        <button>Mais detalhes</button>
      </div>
    </div>
  </Item>
)

export default ItemCardapio
