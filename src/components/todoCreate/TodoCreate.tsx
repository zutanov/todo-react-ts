import { Create, CreateWrapper, CreateInp, CreateBtn } from './todoCreate.style';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { ITodoData } from '../../data/TodoData';

interface CreateProps {
    todo: ITodoData[];
    setTodo: (value: ITodoData[]) => void;
}

const TodoCreate: React.FC<CreateProps> = ({ todo, setTodo }) => {
    const [task, setTask] = useState('');

    const createNewTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (task.length < 4) return;
        const newTask = {
            id: v4(),
            title: task,
            completed: false,
        };

        const newTasks = [newTask, ...todo];
        setTodo(newTasks);
        setTask('');
    };

    return (
        <Create>
            <CreateWrapper>
                <CreateInp value={task} type='text' onChange={e => setTask(e.target.value)} placeholder='New Todo...' />
                <CreateBtn onClick={createNewTask}>Add</CreateBtn>
            </CreateWrapper>
        </Create>
    );
};

export default TodoCreate;
