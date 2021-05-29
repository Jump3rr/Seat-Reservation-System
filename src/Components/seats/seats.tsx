import react, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import {IState} from "../../reducers";
import { ISeatsReducer } from "../../reducers/seatsReducer";
import { getSeats } from "../../Actions/seatsActions";
import { addSeats} from "../../Actions/choosedSeatsActions";
import { getChoosedSeats} from "../../Actions/choosedSeatsActions";
import { ButtonSelect } from "./selectButton";
import { IChoosedSeatsReducer } from "../../reducers/choosedSeatsReducer";

type GetSeats = ReturnType<typeof getSeats>;
type AddToChoosen = ReturnType<typeof addSeats>;
type GetChoosedSeats = ReturnType<typeof getChoosedSeats>;


const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5vh;
  justify-content: center;
`;

const Hall = styled.div`
  background-color: white;
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
  
  &:hover {
    background-color: #ffdc91;
    cursor: pointer;
  }
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
const ChoosedSeat = styled.div`
  width: 5vw;
  height: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: #ffae00;
  margin: 0.5vw;
`;
const NextToEachOther = styled.div`
  display: flex;
`;
const SeatDivEmpty = styled.div`
  width: 5vw;
  height: 5vh;
  text-align: center;
  margin: 0.5vw;

`;

export const Seats = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetSeats>(getSeats());
    dispatch<AddToChoosen>(addSeats());
    dispatch<GetChoosedSeats>(getChoosedSeats());
  }, []);

    const { seatsList, seats } = useSelector<IState, ISeatsReducer & IChoosedSeatsReducer>((globalState) => ({
    ...globalState.seats,
    ...globalState.choosedSeats
  }));

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
  function addToSelected (seat: string) {
    console.log(seat);
    console.log("DODANE");
    addSeats();
    console.log(seat);
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
                return <SeatDiv onClick={()=>{addToSelected(array[index].id)}}/>
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
                      <SeatDiv onClick={()=>{addToSelected(array[index].id)}}/>
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
                      {/* <SeatDiv onClick={addToSelected}/> */}
                      <SeatDiv onClick={()=>{addToSelected(array[index].id)}} />
                      {createTable(14-array[index].cords.y)}
                    </NextToEachOther>
                  )
                }
              }
              else if(array[index].cords.y-array[index-1].cords.y === 1 && array[index].cords.x === array[index-1].cords.x) {
                if(seat.reserved) {
                  return (
                    <ReservedSeat />
                  )
                } else {
                  return (
                    <SeatDiv onClick={()=>{addToSelected(array[index].id)}}></SeatDiv>
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
                    <SeatDiv onClick={()=>{addToSelected(array[index].id)}}/>
                  </NextToEachOther>
                )
                }
              }
            } 
            else {
              return (
                <NextToEachOther>
                {createTable(array[index].cords.y)}
                <SeatDiv onClick={()=>{addToSelected(array[index].id)}} />
                </NextToEachOther>
              )
            }
          })}
          {/* <SeatPicker 
            rows={seatsList}
            aplha
            visible
            selectedByDefault
            loading={false}
            /> */}
          <Info>
            <SeatDiv /> Miejsce dostępne 
            <ReservedSeat />Miejsce zarezerwowane 
            <ChoosedSeat /> Twój wybór 
            <ButtonSelect />
          </Info>
    </Hall>
  );
}
