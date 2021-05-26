import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export const CheckboxNextTo = () => {
    return (
        <Checkbox onChange={onChange}>Czy miejsca mają być obok siebie?</Checkbox>
    )
  }