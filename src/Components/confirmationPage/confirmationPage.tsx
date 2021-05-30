import react, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { getChoosedSeats} from "../../Actions/choosedSeatsActions";
import { ThunkDispatch } from 'redux-thunk';
import { createSelector } from "reselect";
import * as actionTypes from "../../Actions/choosedSeatsTypes";
import {IState, store} from "../../reducers";
import { selectSeats } from '../selected/selectedSlice';



export const ConfirmationPage = () => {
  const selectedSeats = useSelector(selectSeats);

  return (
    <div>
      <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
      <div>Wybrane miejsca: </div>
      {selectedSeats.map((seat:string) => {
        return (
          <div>{seat}</div>
        )
      })}  
      <h3>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
    </div>
  );
}
