import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'User',
  initialState: {
    value: false,
  },
  reducers: {
    ActionUser: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ActionUser } = User.actions

export default User.reducer;