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
      state.value = state.value.filter(item => item.id !== action.payload)
    },

    sumCar: (state, action) => {
      state.value.map(item => item.id === action.payload ? item.cantidad++ : item)
    },

    resCar: (state, action) => {
      if (state.value.some(item => item.id === action.payload && item.cantidad > 1)){
        state.value.map(item => item.id === action.payload ? item.cantidad-- : item)
      }      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCar, removeCar, sumCar, resCar} = Car.actions

export default Car.reducer