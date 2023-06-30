import React from 'react';
import { Counter } from './todoCounter.style';

const TodoCounter = ({ n = 0 }: any) => {
    const counter = n > 1 ? `${n} tasks remaining` : `${n} task remaining`;
    return <Counter>{counter}</Counter>;
};

export default TodoCounter;
