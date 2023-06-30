import React, { useState } from 'react';
import TodoCreate from '../todoCreate/TodoCreate';
import { Main, Title } from './todoMain.style';
import TodoCounter from '../todoCounter/TodoCounter';
import TodoDesc from '../todoDesc/TodoDesc';

const Todo = () => {
    const [text, setText] = useState(null);

    const num = 1;
    return (
        <Main>
            <Title>Todo List</Title>
            <TodoCreate setText={setText} />
            <TodoCounter n={num} />
            <TodoDesc />
        </Main>
    );
};

export default Todo;
