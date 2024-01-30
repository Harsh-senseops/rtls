import { configureStore } from '@reduxjs/toolkit'
import  navbar  from '../redux-slices/navbar'
import timers from '../redux-slices/timers'

export const store = configureStore({
  reducer: {
     navbar,
     timers
  },
})