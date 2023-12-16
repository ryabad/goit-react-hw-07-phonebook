import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactAction,
  deleteContactAction,
  fetchContactAction,
} from './userService';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactAction.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.user.push(action.payload);
      })
      .addCase(deleteContactAction.fulfilled, (state, action) => {
        const index = state.user.findIndex(
          user => user.id === action.payload.id
        );
        state.user.splice(index, 1);
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
