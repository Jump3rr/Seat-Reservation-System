import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  selectCount,
} from '../counter/counterSlice';
import styles from '../counter/Counter.module.css';


export const Input = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  function onChange(value) {
    console.log('changed', value);
    //setIncrementAmount(value);
    dispatch(incrementByAmount(value));
  }
  
  
  return (
  <div>
    <span className={styles.value}>{count}</span>
    Liczba miejsc: <InputNumber min={1} max={9} defaultValue={1} onChange={onChange} />
    {/* <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
      Add Amount
    </button> */}
  </div>
  )
}