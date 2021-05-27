import { ISeat } from "../seats/ISeat";
import * as actionTypes from "../../actions/seatsTypes";

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
