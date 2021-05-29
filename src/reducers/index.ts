import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import seats, { ISeatsReducer } from "./seatsReducer";
import choosedSeats, { IChoosedSeatsReducer } from "./choosedSeatsReducer";
import counterReducer from '../Components/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default configureStore({
  reducer: {
    counter: counterReducer,
    seats,
    choosedSeats,
  },
});

// export default combineReducers({
//   counterReducer,
//   seats
// });


export interface IState {
  seats: ISeatsReducer;
  choosedSeats : IChoosedSeatsReducer,
}
