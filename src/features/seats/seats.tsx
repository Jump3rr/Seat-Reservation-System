import react, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../seatsReducer";
import { ISeatsReducer } from "../seatsReducer/seatsReducer";

import { getSeats } from "../../actions/seatsActions";

type GetSeats = ReturnType<typeof getSeats>;

const Hall = styled.div`
  background-color: blue;
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
`;
const SeatDiv = styled.div`
  width: 5vw;
  height: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: white;
  margin: 0.5vw;
  position: relative;
`;
const ReservedSeat = styled.div`
  width: 5vw;
  height: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: grey;
  margin: 0.5vw;
`;
const NextToEachOther = styled.div`
  display: flex;
`;
const SeatDivEmpty = styled.div`
  width: 5vw;
  height: 5vh;
  text-align: center;
  background-color: blue;
  margin: 0.5vw;

`;

export const Seats = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetSeats>(getSeats());
  }, []);

    const { seatsList } = useSelector<IState, ISeatsReducer>((globalState) => ({
    ...globalState.seats
  }));
  let x=0;
  let y=0;

  function createTable (position: number) {
    let table = []

    for (let i = 0; i < position; i++) {
      table.push(<tr>
        {
          <SeatDivEmpty />
        }
      </tr>)
    }
    return table
  }


  return (
    <Hall>
      
      {seatsList?.length > 0 &&
          seatsList.map((seat, index, array) => {
            if(index>0){
              if(array[index].cords.y===0) {  
                if(seat.reserved) {
                  return <ReservedSeat />
                } else {
                return <SeatDiv />
                }
              }
              else if(array[index].cords.x !== array[index-1].cords.x) {
                if(seat.reserved) {
                  return (
                    <NextToEachOther>
                      {createTable(array[index].cords.y)}
                      <ReservedSeat />
                    </NextToEachOther>
                  )
                } else {
                  return (
                    <NextToEachOther>
                      {createTable(array[index].cords.y)}
                      <SeatDiv />
                    </NextToEachOther>
                  )
                }
              }
              else if(array[index].cords.x <= 8 && array[index].cords.x < array[index+1].cords.x && array[index].cords.y<14) {
                if(seat.reserved) {
                  return (
                    <NextToEachOther>
                      <ReservedSeat />
                      {createTable(14-array[index].cords.y)}
                    </NextToEachOther>
                  )
                }else {
                  return (
                    <NextToEachOther>
                      <SeatDiv />
                      {createTable(14-array[index].cords.y)}
                    </NextToEachOther>
                  )
                }
              }
              else if(array[index].cords.y-array[index-1].cords.y === 1 && array[index].cords.x === array[index].cords.x) {
                if(seat.reserved) {
                  return (
                    <ReservedSeat />
                  )
                } else {
                  return (
                    <SeatDiv />
                  )
                }
              }
              else {
                if(seat.reserved) {
                  return (
                    <NextToEachOther>
                    {createTable(array[index].cords.y-array[index-1].cords.y-1)}
                    <ReservedSeat />
                  </NextToEachOther>
                  )
                } else {
                return (
                  <NextToEachOther>
                    {createTable(array[index].cords.y-array[index-1].cords.y-1)}
                    <SeatDiv />
                  </NextToEachOther>
                )
                }
              }
            } 
            else {
              return (
                <NextToEachOther>
                {createTable(array[index].cords.y)}
                <SeatDiv></SeatDiv>
                </NextToEachOther>
              )
            }
          })}
    </Hall>
  );
}
