import React from 'react';
// import '../../index.css';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

export const Input = () => {
  return (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
  )
}