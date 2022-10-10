import { createSlice } from '@reduxjs/toolkit';
import { getUsers, addUsers } from './usersOperations';

const usersSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getUsers.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [addUsers.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
  },
});


export default usersSlice.reducer;
