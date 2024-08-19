import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestauranteType } from '../../pages/Home'

type CartState = {
  items: RestauranteType[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestauranteType>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
