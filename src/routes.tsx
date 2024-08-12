import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import RestaurantePage from './pages/RestaurantePage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/restaurante/:id"
      element={
        <RestaurantePage
          categoria=""
          imagemRestaurante=""
          itensCardapio={}
          nomeRestaurante=""
        />
      }
    />
  </Routes>
)

export default Rotas
