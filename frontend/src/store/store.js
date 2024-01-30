import { configureStore } from '@reduxjs/toolkit'
import  navbar  from '../redux-slices/navbar'
<<<<<<< HEAD
=======
import timers from '../redux-slices/timers'
>>>>>>> f9113c7 (Latest code)

export const store = configureStore({
  reducer: {
     navbar,
<<<<<<< HEAD
=======
     timers
>>>>>>> f9113c7 (Latest code)
  },
})