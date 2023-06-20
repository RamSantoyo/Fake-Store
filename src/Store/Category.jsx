import { createSlice } from '@reduxjs/toolkit'

export const Category = createSlice({
  name: 'Category',
  initialState: {
    value: [],
  },
  reducers: {
    addCategory: (state, action) => {
        state.value = [];
        state.value.push(action.payload)
    },
    clearCategory: (state) => {
        state.value = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCategory, clearCategory } = Category.actions

export default Category.reducer