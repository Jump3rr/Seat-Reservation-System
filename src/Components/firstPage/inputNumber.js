import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  selectCount,
} from '../counter/counterSlice';
import styles from '../counter/Counter.module.css';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { render } from '@testing-library/react';


export const Input = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //const [incrementAmount, setIncrementAmount] = useState('2');

  //const incrementValue = Number(incrementAmount) || 0;

  function onChange(value) {
    console.log('changed', value);
    dispatch(incrementByAmount(value));
  }
  const [maxValue, setMaxValue] = useState(9);

  const [checked, setChecked] = useState(false)
  const handleClick = () => {setChecked(!checked)
  if(!checked) {
    setMaxValue(5);
  }
  else 
    setMaxValue(9);
}
  return (
  <div>
    <span className={styles.value}>{count}</span>
    Liczba miejsc: <InputNumber min={1} max={maxValue} defaultValue={1} onChange={onChange} />
    
    <input type="checkbox" onClick={handleClick} checked={checked}></input>
  </div>
  )
}