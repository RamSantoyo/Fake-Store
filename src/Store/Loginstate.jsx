import { createSlice } from '@reduxjs/toolkit'

export const Login = createSlice({
  name: 'Login',
  initialState: {
    value: false,
  },
  reducers: {
    Actionlogin: (state, action) => {
      state.value = !state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { Actionlogin } = Login.actions

export default Login.reducer;