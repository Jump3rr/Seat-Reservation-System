import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../Components/counter/counterSlice";
import seats, {ISeatsReducer} from "../reducers/seatsReducer"
import selectedReducer from "../Components/selected/selectedSlice";
// import choosedSeats, {IChoosedSeatsReducer} from "../reducers/choosedSeatsReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedSeats: selectedReducer,
    seats,
    //choosedSeats
  },
});


export interface IState {
  seats: ISeatsReducer;
}
