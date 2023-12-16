import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://657d95bf3e3f5b189462c51b.mockapi.io';

export const fetchContactAction = createAsyncThunk(
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

export const addContactAction = createAsyncThunk(
  'user/addContact',
  async (newContact, thunk) => {
    try {
      const responce = await axios.post('/contacts', newContact);
      return responce.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  'user/deleteContact',
  async (contactId, thunk) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);
