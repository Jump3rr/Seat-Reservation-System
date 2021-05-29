import { ISeat } from "../Components/seats/ISeats";
import * as actionTypes from "../Actions/seatsTypes";

export interface ISeatsReducer {
  seatsList: ISeat[];
}

const defaultState = (): ISeatsReducer => ({
  seatsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_SEATS: {
      const paylod: actionTypes.ISeatsTypes["GET_SEATS"] = action;
      return {
        ...state,
        seatsList: paylod.seatsList
      };
    }
    default: {
      return state;
    }
  }
};
