import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'
import fundoHeader from '../../assets/images/Vector.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="container">
      <img src={logo} alt="Efood" />
      <h3>Viva experiências gastronômicas no conforto da sua casa</h3>
    </div>
  </HeaderBar>
)

export default Header
