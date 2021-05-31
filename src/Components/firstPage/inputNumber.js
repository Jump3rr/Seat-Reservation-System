import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  nextTo,
  selectCount,
  isChecked,
} from '../counter/counterSlice';
import styles from '../counter/Counter.module.css';

export const Input = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const chkbNextTo = useSelector(isChecked);

  function onChange(value) {
    console.log('changed', value);
    dispatch(incrementByAmount(value));
  }
  const [maxValue, setMaxValue] = useState(9);

  const [checked, setChecked] = useState(false)

  const handleClick = () => {setChecked(!checked)
  if (!checked) {
    setMaxValue(5);
    dispatch(nextTo(!chkbNextTo));
  } else setMaxValue(9);
    dispatch(nextTo(!chkbNextTo));
}
  return (
  <div>
    <span className={styles.value}>{count}</span>
    Liczba miejsc: <InputNumber min={1} max={maxValue} defaultValue={1} onChange={onChange} />
    
    <div><h5><input type="checkbox" onChange={handleClick} checked={checked} /> Czy miejsca mają być obok siebie?</h5></div>
  </div>
  )
}