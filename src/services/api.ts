import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestauranteType[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query<RestauranteType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestaurantByIdQuery } = api

export default api
