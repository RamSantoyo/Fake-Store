import { createSlice } from '@reduxjs/toolkit';

export const Modalcheck = createSlice({
  name: 'Modalcheck',
  initialState: {
    value: false,
    timeoutId: null, // Agregamos una nueva propiedad para almacenar el ID del temporizador
  },
  reducers: {
    Edit: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Edit } = Modalcheck.actions;

export default Modalcheck.reducer;
