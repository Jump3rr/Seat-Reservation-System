import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 1,
  status: 'idle',
  checked: false,
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
    nextTo: (state, action) => {
      state.checked = action.payload;
    },
  },
});

export const { incrementByAmount } = counterSlice.actions;
export const { nextTo } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const isChecked = (state) => state.counter.checked;

export default counterSlice.reducer;
