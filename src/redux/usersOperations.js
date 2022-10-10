import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi, addUsersApi } from '../resourse/api';

export const getUsers = createAsyncThunk('getUsers', async (page, thunkApi) => {
   
  try {
    const users = await getUsersApi(page);
    return users;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addUsers = createAsyncThunk(
  'addUsers',
  async (object, thunkApi) => {
    try {
      const renewalUsers = await addUsersApi(object);
      return renewalUsers;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

