import { createSlice } from '@reduxjs/toolkit'

export const Car = createSlice({
  name: 'Car',
  initialState: {
    value: [],
  },
  reducers: {
    addCar: (state, action) => {
      state.value.some(item => item.id === action.payload.id) ? state.value.map(item => item.id === action.payload.id ? item.cantidad++ : item) : state.value.push(action.payload)
    },
    removeCar: (state, action) => {
        state.value = state.value.filter(item => item !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCar, removeCar } = Car.actions

export default Car.reducer