import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterS: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterS } = filterSlice.actions;
