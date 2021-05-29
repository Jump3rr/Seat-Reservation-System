import {IChoosedSeatsTypes} from "./choosedSeatsTypes";
import * as actionTypes from "./choosedSeatsTypes";

export const getChoosedSeats = () => ({
  type: actionTypes.GET_SEATS
});
export const addSeats = () => ({
  type: actionTypes.ADD_SEAT
})
export const removeSeat = () => ({
  type: actionTypes.REMOVE_SEAT
})