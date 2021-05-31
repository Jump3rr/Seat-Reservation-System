import react, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import {IState, store} from "../../reducers";
import { ISeatsReducer } from "../../reducers/seatsReducer";
import { getSeats } from "../../Actions/seatsActions";
import { ButtonSelect } from "./selectButton";
import { selectCount } from '../counter/counterSlice';
import { isChecked } from "../counter/counterSlice";
import { Colors } from "../../styledHelpers/Colors";
import {
  addSeat,
  removeSeat,
  selectSeats,
} from '../selected/selectedSlice';

type GetSeats = ReturnType<typeof getSeats>;

const Info = styled.div`
  display: flex; 
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5vh;
  justify-content: center;
`;

const Hall = styled.div`
  background-color: ${Colors.white};
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;

  @media (max-height: 465px) {
    width: 60vw;
    height: auto;
  }
`;
const SeatDiv = styled.div`
  width: 5vw;
  height: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: ${Colors.white};
  margin: 0.5vw;
  position: relative;
  
  &:hover {
    background-color: ${Colors.hover};
    cursor: pointer;
  }
  @media (max-height: 465px) {
    width: 3vw;
    height: 3vh;
    border-width: 1px;
  }
`;
const SeatDivInfo = styled.div`
  width: 5vw;
  height: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: ${Colors.white};
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
  background-color: ${Colors.grey};
  margin: 0.5vw;

  @media (max-height: 465px) {
    width: 3vw;
    height: 3vh;
    border-width: 1px;
  }
`;
const ChoosedSeat = styled.div`
  width: 5vw;
  height: 5vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: ${Colors.selected};
  margin: 0.5vw;
  @media (max-height: 465px) {
    width: 3vw;
    height: 3vh;
    border-width: 1px;
  }
`;
const NextToEachOther = styled.div`
  display: flex;
`;
const SeatDivEmpty = styled.div`
  width: 5vw;
  height: 5vh;
  text-align: center;
  margin: 0.5vw;
  @media (max-height: 465px) {
    width: 3vw;
    height: 3vh;
    border-width: 1px;
  }

`;

export const Seats = () => {

  const selectedSeats = useSelector(selectSeats);
  const count = useSelector(selectCount);
  const isNextToChecked = useSelector(isChecked);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetSeats>(getSeats());
  }, []);
  

    const { seatsList } = useSelector<IState, ISeatsReducer>((globalState) => ({
    ...globalState.seats,
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

  const addToSelected = (seat: any) => {  
    if(selectedSeats.length>0) {

      let index = selectedSeats.indexOf(seat.id);

      if(index !== -1) {
        let element = document.getElementById(seat.id);
        if(element != null) {
          element.style.backgroundColor="";
        }
        dispatch(removeSeat(index));
      }
      else if(selectedSeats.length < count) {
        let element = document.getElementById(seat.id);
        if(element != null) {
          element.style.backgroundColor="#ffae00";
        }
        dispatch(addSeat(seat.id));
      }
    } 
    else {
      let element = document.getElementById(seat.id);
      if(element != null) {
        element.style.backgroundColor="#ffae00";
      }
      dispatch(addSeat(seat.id));
    }
  }

  useEffect(() => {
    setTimeout(() => {
    let max = count-selectedSeats.length;
    if(seatsList?.length > 0 && selectedSeats.length<count) {
    if(isNextToChecked) {
      while(true) {
        let selectedNbr = Math.floor(Math.random() * (seatsList.length-max));
        let row = seatsList[selectedNbr].cords.x;
        let nextToPrev = 0;
        for(let j = 0; j<max; j++) {
          if(seatsList[selectedNbr+j].reserved===false && seatsList[selectedNbr+j].cords.x === row)
          {
            if (j + 1 < max) {
              if (
                seatsList[selectedNbr + j + 1].cords.y -
                  seatsList[selectedNbr + j].cords.y ===
                1
              )
                nextToPrev = nextToPrev + 1;
            } else nextToPrev = nextToPrev + 1;
          }
        }
        if(nextToPrev===max) {
          for(let j = 0; j<max; j++) {
            addToSelected(seatsList[selectedNbr+j]);
          }
          break;
        }
    }
    }
    else {
      for(let i=0; i<max; i++) {
        let selectedNbr = Math.floor(Math.random() * (seatsList.length));
        if(seatsList[selectedNbr].reserved===false && selectedSeats?.indexOf(seatsList[selectedNbr].id) === -1) {
          addToSelected(seatsList[selectedNbr]);
        }
        else if(seatsList[selectedNbr].reserved===true) {
          max = max+1;
        }
      }
    }
  }
  }, 200);
  }, [seatsList]);

  return (
    <Hall>
      {seatsList?.length > 0 &&
          seatsList.map((seat, index, array) => {
            if(index>0){
              if(array[index].cords.y===0) {  
                if(seat.reserved) {
                  return <ReservedSeat />
                } else {
                return <SeatDiv onClick={() => addToSelected(array[index])} id={array[index].id}/>
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
                      <SeatDiv onClick={() => addToSelected(array[index])} id={array[index].id}/>
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
                      <SeatDiv onClick={() => addToSelected(array[index])}  id={array[index].id}/>
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
                  <SeatDiv onClick={() => addToSelected(array[index])} id={array[index].id}></SeatDiv>
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
                    <SeatDiv onClick={() => addToSelected(array[index])} id={array[index].id}/>
                  </NextToEachOther>
                )
                }
              }
            } 
            else {
              return (
                <NextToEachOther>
                {createTable(array[index].cords.y)}
                <SeatDiv onClick={() => addToSelected(array[index])} id={array[index].id}/>
                </NextToEachOther>
              )
            }
          })}
          <Info>
            <SeatDivInfo /> Miejsce dostępne 
            <ReservedSeat />Miejsce zarezerwowane 
            <ChoosedSeat /> Twój wybór 
            <ButtonSelect />
          </Info>
    </Hall>
    
  );
}
