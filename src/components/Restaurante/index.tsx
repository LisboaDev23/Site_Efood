import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
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
  nota: number
  destacado: boolean
  tipo: string
  link: string
}

const Restaurante = ({
  nome,
  descricao,
  imagem,
  nota,
  destacado,
  tipo,
  link
}: Props) => (
  <Card>
    <img src={imagem} alt={descricao} />
    <Categoria>
      {destacado ? (
        <>
          <Tag>Destaque da semana</Tag>
          <Tag>{tipo}</Tag>
        </>
      ) : (
        <Tag>{tipo}</Tag>
      )}
    </Categoria>
    <div className="containerInfos">
      <NomeNotaContainer>
        <h4>{nome}</h4>
        <div style={{ display: 'flex' }}>
          <h4>{nota}</h4>
          <img src={estrela} alt={'avaliação'} style={{ marginLeft: '8px' }} />
        </div>
      </NomeNotaContainer>
      <Descricao>{descricao}</Descricao>
      <Link style={{ textDecoration: 'none' }} to={link}>
        <BotaoSaibaMais>Saiba mais</BotaoSaibaMais>
      </Link>
    </div>
  </Card>
)

export default Restaurante
