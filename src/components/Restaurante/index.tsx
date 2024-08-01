import { Link } from 'react-router-dom'
import Tag from '../Tag'
import {
  BotaoSaibaMais,
  Card,
  Categoria,
  Descricao,
  NomeNotaContainer
} from './styles'

//necessito agora de uma representação do Objeto restaurante para preenchermos as informações
//com as definições de instâncias

//para isso eu necessito criar as propriedades do Restaurante
type Props = {
  nome: string
  descricao: string
  imagem: string
  nota: string
  infos: string[]
  link: string
}

const Restaurante = ({ nome, descricao, imagem, nota, infos, link }: Props) => (
  <Card>
    <img src={imagem} alt={descricao} />
    <Categoria>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Categoria>
    <div className="containerInfos">
      <NomeNotaContainer>
        <h4>{nome}</h4>
        <img src={nota} alt={nota} />
      </NomeNotaContainer>
      <Descricao>{descricao}</Descricao>
      <Link style={{ textDecoration: 'none' }} to={link}>
        <BotaoSaibaMais>Saiba mais</BotaoSaibaMais>
      </Link>
    </div>
  </Card>
)

export default Restaurante
