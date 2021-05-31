import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../Components/counter/counterSlice";
import seats, {ISeatsReducer} from "../reducers/seatsReducer"
import selectedReducer from "../Components/selected/selectedSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedSeats: selectedReducer,
    seats,
  },
});


export interface IState {
  seats: ISeatsReducer;
}
