import { createSlice } from '@reduxjs/toolkit'

export const Heart = createSlice({
  name: 'Heart',
  initialState: {
    value: [],
  },
  reducers: {
    addHeart: (state, action) => {
      if(!state.value.find(item => item.id === action.payload.id)){
        state.value.push(action.payload)
      }
    },
    removeHeart: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addHeart, removeHeart } = Heart.actions

export default Heart.reducer