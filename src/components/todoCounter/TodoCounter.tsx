import React, { memo } from 'react';
import { Counter } from './todoCounter.style';

interface TodoLength {
    num: number;
}

const TodoCounter: React.FC<TodoLength> = memo(({ num = 0 }) => {
    const counter = num > 1 ? `${num} tasks remaining` : `${num} task remaining`;
    return <Counter>{num !== 0 ? counter : 'There are no tasks!'}</Counter>;
});

export default TodoCounter;
