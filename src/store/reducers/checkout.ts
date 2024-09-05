import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  infosEntregaAberto: false,
  infosPagamentoAberto: false,
  pagamentoConcluido: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openInfosEntrega: (state) => {
      state.infosEntregaAberto = true
    },
    closeInfosEntrega: (state) => {
      state.infosEntregaAberto = false
    },
    openInfosPagamento: (state) => {
      state.infosPagamentoAberto = true
    },
    closeInfosPagamento: (state) => {
      state.infosPagamentoAberto = false
    },
    openPagConcluido: (state) => {
      state.pagamentoConcluido = true
    },
    closePagConcluido: (state) => {
      state.pagamentoConcluido = false
    }
  }
})

export const {
  openInfosEntrega,
  closeInfosEntrega,
  openInfosPagamento,
  closeInfosPagamento,
  openPagConcluido,
  closePagConcluido
} = checkoutSlice.actions

export default checkoutSlice.reducer
