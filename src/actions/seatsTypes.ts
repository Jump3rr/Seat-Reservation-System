import {ISeat} from "../Components/seats/ISeats"

export const GET_SEATS = "GET_SEATS";

export interface ISeatsTypes {
  GET_SEATS: {
    seatsList: ISeat[];
  };
}
