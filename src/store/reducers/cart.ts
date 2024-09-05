import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapioRestaurante } from '../../pages/Home'

type CartState = {
  items: ItemCardapioRestaurante[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemCardapioRestaurante>) => {
      const pedido = state.items.find((item) => item.id === action.payload.id)

      if (!pedido) {
        state.items.push(action.payload)
      } else {
        alert('Pedido já adicionado no carrinho!')
      }
    },
    clean: (state) => {
      state.items = []
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close, clean } = cartSlice.actions
export default cartSlice.reducer
