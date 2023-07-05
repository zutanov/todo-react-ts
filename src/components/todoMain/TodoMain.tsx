import React, { useCallback, useEffect, useState } from 'react';
import TodoCreate from '../todoCreate/TodoCreate';
import { Main, Title } from './todoMain.style';
import TodoFilter from '../todoFilter/TodoFilter';

import TodoCounter from '../todoCounter/TodoCounter';
import TodoDesc from '../todoDesc/TodoDesc';
import { ITodoData, list } from '../../data/TodoData';

const Todo = () => {
    const [todo, setTodo] = useState<ITodoData[]>([]);
    const [active, setActive] = useState(2);

    useEffect(() => {
        const parse = localStorage.getItem('tasks');
        if (parse) {
            setTodo(JSON.parse(parse));
        } else {
            setTodo(list);
            localStorage.setItem('tasks', JSON.stringify(list));
        }
    }, []);

    useEffect(() => {
        if (todo.length) {
            localStorage.setItem('tasks', JSON.stringify(todo));
        }
    }, [todo]);

    const removeTodo = useCallback((task: ITodoData) => {
        setTodo(prev => prev.filter((el: ITodoData) => el.id !== task.id));
    }, []);

    const filteredTodo = React.useMemo(
        () => todo.filter(value => (active === 2 ? value : active === 0 ? !value.completed : value.completed)),
        [active, todo]
    );

    const changeActiveBtn = useCallback((status: number) => {
        setActive(status);
    }, []);

    // const filter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: number) => {
    //     e.preventDefault();
    //     if (status === 2) setFiltered(todo);
    //     else {
    //         let newList = [...todo].filter(el => Number(el.completed) === status);
    //         setFiltered(newList);
    //     }
    // };

    return (
        <Main>
            <Title>Todo List</Title>
            <TodoCreate todo={todo} setTodo={setTodo} />
            <TodoFilter active={active} changeActiveBtn={changeActiveBtn} />
            <TodoCounter num={filteredTodo.length} />
            <TodoDesc remove={removeTodo} data={filteredTodo} setData={setTodo} />
        </Main>
    );
};

export default Todo;
