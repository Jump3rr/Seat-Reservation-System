import { Dispatch } from "redux";
import * as actionTypes from "./seatsTypes";
import {ISeat} from "../Components/seats/ISeats"


export const getSeats = (): Promise<any> =>
  ((dispath: Dispatch) => {
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
  
