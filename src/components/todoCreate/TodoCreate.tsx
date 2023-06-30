import { Create, CreateWrapper, CreateInp, CreateBtn } from './todoCreate.style';
import TodoFilter from '../todoFilter/TodoFilter';
import { useState } from 'react';

const TodoCreate = (props: any) => {
    const [createTask, setCreateTask] = useState('');

    const addTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        setCreateTask(target);
    };

    const createNewTask = () => {
        if (createTask.length < 4) return;
        console.log(createTask);
        props.setText(createTask);
        setCreateTask('');
    };

    return (
        <Create>
            <CreateWrapper>
                <CreateInp value={createTask} id='createInput' onChange={addTodoText} placeholder='New Todo...' />
                <CreateBtn onClick={createNewTask}>Add</CreateBtn>
            </CreateWrapper>
            <TodoFilter />
        </Create>
    );
};

export default TodoCreate;
