import { Dispatch } from "redux";
import * as actionTypes from "./seatsTypes";
import { ISeat } from "../features/seats/ISeat";
import seatsReducer from "../features/seatsReducer/seatsReducer";

export const getSeats = (): Promise<any> =>
  ((dispath: Dispatch) => {
    //dummyapi to zrobilo, sprawdz tam
    return fetch("../db.json", {})
      .then((response) => response.json())
      .then(seats => seats.seats)
      .then((seatsList: ISeat[]) => {
        dispath({
          type: actionTypes.GET_SEATS,
          seatsList,
        });
      });
}) as any;
  
