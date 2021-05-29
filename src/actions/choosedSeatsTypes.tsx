import {ISeat} from "../Components/seats/ISeats"
export const GET_SEATS = "GET_SEATS";
export const ADD_SEAT = "ADD_SEAT";
export const REMOVE_SEAT = "ADD_SEAT";

export interface IChoosedSeatsTypes {
  GET_SEATS: {
    seats: ISeat[];
  };
  ADD_SEAT: {
    seats: ISeat[];
  };
  REMOVE_SEAT: {
    seats: ISeat[];
  };
}
