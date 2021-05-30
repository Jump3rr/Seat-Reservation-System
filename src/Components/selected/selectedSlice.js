import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './selectedAPI';

const initialState = {
  value: [],
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'selectedSeats/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const selectedSlice = createSlice({
  name: 'selectedSeats',
  initialState,
  reducers: {
    addSeat: (state, action) => {
      state.value.push(action.payload);
    },
    removeSeat: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  },
});

export const { addSeat, removeSeat } = selectedSlice.actions;

export const selectSeats = (state) => state.selectedSeats.value;

export default selectedSlice.reducer;
