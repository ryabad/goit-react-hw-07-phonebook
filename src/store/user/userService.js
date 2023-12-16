import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://657d95bf3e3f5b189462c51b.mockapi.io';

export const fetchUsersAction = createAsyncThunk(
  'users/fetchAll',
  async (_, thunk) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const addUserAction = createAsyncThunk(
  'user/addUser',
  async (newUser, thunk) => {
    try {
      const responce = await axios.post('/contacts', newUser);
      return responce.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const deleteUserAction = createAsyncThunk(
  'user/deleteUser',
  async (userId, thunk) => {
    try {
      const responce = await axios.delete(`/contacts/${userId}`);
      return responce.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);
