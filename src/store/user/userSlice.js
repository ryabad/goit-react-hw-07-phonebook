import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    deleteContact: (state, action) => {
      state.user = state.user.filter(el => el.id !== action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;

export const { addContact, deleteContact } = userSlice.actions;
