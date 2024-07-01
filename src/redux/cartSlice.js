//slice 만들기 _ slice는 reducer와 action 생성함수 등의 기능 제공하는 객체
//name: reducer 이름, initialState: 데이터 초기값 object 형식으로 key/value 형식으로!, reducers: action 형식 지정
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../assets/cartItem';

const initialState = cartItems;

export const cartSlice = createSlice({
  name: 'playerFunction',
  initialState,
  reducers: {
    increase: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, amount: e.amount + 1 } : e,
      );
    },
    decrease: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, amount: e.amount - 1 } : e,
      );
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
