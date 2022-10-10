import { configureStore } from '@reduxjs/toolkit';
import items from './usersSlice.js';


const store = configureStore({
  reducer: {
    users: items,
  },
});

export { store };