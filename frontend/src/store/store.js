import { configureStore } from '@reduxjs/toolkit'
import  navbar  from '../redux-slices/navbar'

export const store = configureStore({
  reducer: {
     navbar,
  },
})