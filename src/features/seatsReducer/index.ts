import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import seats, { ISeatsReducer } from "./seatsReducer";
import counterReducer from '../counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default configureStore({
  reducer: {
    counter: counterReducer,
    seats,
  },
});

// export default combineReducers({
//   counterReducer,
//   seats
// });


export interface IState {
  seats: ISeatsReducer;
}
