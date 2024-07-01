import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import cartSlice from './cartSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
    player: cartSlice,
  },
});
