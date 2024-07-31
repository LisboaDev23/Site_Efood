import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaRestaurantes from './components/ListaRestaurantes'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <ListaRestaurantes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
