/* eslint-disable import/no-anonymous-default-export */
import { Action } from "redux";
import { ISeat } from "../Components/seats/ISeats";
import * as actionTypes from "../Actions/choosedSeatsTypes";

export interface IChoosedSeatsReducer {
  seats: ISeat[]
};

const defaultState = (): IChoosedSeatsReducer => ({
    seats: [],
  });

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_SEATS: {
        const payload: actionTypes.IChoosedSeatsTypes["GET_SEATS"] = action;
        return {
          ...state,
          seats: payload.seats
        };
      }
    case actionTypes.ADD_SEAT: 
      return { 
        ...state, 
        // seats: state.seats.concat(action.newItem)
        seats: [...state.seats, action.payload]
      };
    // case actionTypes.REMOVE_SEAT: 
    //   return state.seats.filter(seat => seat !== action.seat)
    default:
      return state;
  }
};
