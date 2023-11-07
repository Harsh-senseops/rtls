import { createSlice } from '@reduxjs/toolkit'; 
const initialState = {
   index:parseInt(localStorage.getItem('p')) || 0,
   childIndex:parseInt(localStorage.getItem('c'))||0
}

export const navbar = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setNavbarDropDownIndex: (state,payload) => {
        state.index = payload.payload
    },
    setNavbarDropDownChildIndex:(state,payload) => {
      state.childIndex = payload.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setNavbarDropDownIndex,setNavbarDropDownChildIndex } = navbar.actions

export default navbar.reducer