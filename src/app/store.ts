import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../Components/counter/counterSlice";
import seats, {ISeatsReducer} from "../reducers/seatsReducer"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    seats,
  },
});


export interface IState {
  seats: ISeatsReducer;
}
