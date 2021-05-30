import {IChoosedSeatsTypes} from "./choosedSeatsTypes";
import * as actionTypes from "./choosedSeatsTypes";

export const getChoosedSeats = () => ({
  type: actionTypes.GET_SEATS
});
export const addSeats = (seat: string) => ({
  type: actionTypes.ADD_SEAT,
  seat
})
export const removeSeat = () => ({
  type: actionTypes.REMOVE_SEAT
})