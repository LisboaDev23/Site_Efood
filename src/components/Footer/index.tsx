import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import fundo from '../../assets/images/Vector.svg'
import { ContainerFooter, ContainerLogoRedes, LogoFooter } from './styles'

const Footer = () => (
  <ContainerFooter style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <ContainerLogoRedes>
        <LogoFooter src={logo} alt="Efood" />
        <div>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#" style={{ marginRight: 8, marginLeft: 8 }}>
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </ContainerLogoRedes>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </div>
    </div>
  </ContainerFooter>
)

export default Footer
