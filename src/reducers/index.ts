import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import seats, { ISeatsReducer } from "./seatsReducer";
// import choosedSeats, { IChoosedSeatsReducer } from "./choosedSeatsReducer";
import counterReducer from '../Components/counter/counterSlice';
//import {choosedSeats} from "./choosedSeatsReducer";
import selectedReducer from "../Components/selected/selectedSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedSeats: selectedReducer
  },
});
export default configureStore({
  reducer: {
    counter: counterReducer,
    selectedSeats: selectedReducer,
    seats,
  },
});

export interface IState {
  seats: ISeatsReducer;
}
