import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import seats, { ISeatsReducer } from "../features/seatsReducer/seatsReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    seats,
  },
});


export interface IState {
  seats: ISeatsReducer;
}

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import reducers from '../features/seatsReducer';

// const store = createStore(reducers, applyMiddleware(thunk));

// export default store;

