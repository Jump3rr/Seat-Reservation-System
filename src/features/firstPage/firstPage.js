import React from 'react';
import { Counter } from '../counter/Counter';
import {Input} from './inputNumber';
import {CheckboxNextTo} from './/checkbox';
import {ButtonSelect} from './buttonSelect';

export const FirstPage = () => {
  return (
    <div>
        <Input />
        <CheckboxNextTo />
        <ButtonSelect />
    </div>
  );
}
