import React, { SetStateAction, useState, memo } from 'react';
import { Desc, DescBtn, DescInp, DescText, DescWrapper, DescEdit } from './todoDesc.style';
import { ITodoData } from '../../data/TodoData';

interface DescProps {
    data: ITodoData[];
    setData: (value: ITodoData[]) => void;
    remove: (task: ITodoData) => void;
}

const TodoDesc: React.FC<DescProps> = memo(({ data, setData, remove }: any) => {
    const [edit, setEdit] = useState(0);
    const [value, setValue] = useState('');

    const editTodo = (id: SetStateAction<number>, title: string) => {
        setEdit(id);
        setValue(title);
    };

    const removeTodo = (fn: any, el: any) => {
        if (!edit) fn(el);
        return;
    };

    const saveTodo = (id: number) => {
        setData((prev: any) =>
            prev.map((el: { id: number; title: string }) => {
                if (el.id === id) {
                    el.title = value;
                    setValue('');
                }
                return el;
            })
        );
        setEdit(0);
    };

    const cancelTodo = () => {
        setEdit(0);
    };

    const checkedTodo = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        // const newData = [...data].map((el: { id: number; completed: boolean }) => {
        //     if (el.id === id) {
        //         el.completed = e.target.checked;
        //     }
        //     return el;
        // });

        setData((prev: any) => [
            ...prev.map((el: { id: number; completed: boolean }) => {
                if (el.id === id) {
                    el.completed = e.target.checked;
                }
                return el;
            }),
        ]);
    };

    return (
        <>
            {data.map((el: any) => {
                return (
                    <Desc key={el.id}>
                        {edit === el.id ? (
                            <>
                                <DescWrapper>
                                    <DescEdit value={value} onChange={e => setValue(e.target.value)} />
                                </DescWrapper>
                                <DescWrapper>
                                    <DescBtn onClick={() => saveTodo(el.id)}>Save</DescBtn>
                                    <DescBtn onClick={cancelTodo}>Cancel</DescBtn>
                                </DescWrapper>
                            </>
                        ) : (
                            <>
                                <DescWrapper>
                                    <DescInp
                                        type='checkbox'
                                        defaultChecked={el.completed}
                                        onChange={e => checkedTodo(el.id, e)}
                                    />
                                    <DescText>{el.title}</DescText>
                                </DescWrapper>
                                <DescWrapper>
                                    <DescBtn onClick={() => editTodo(el.id, el.title)}>Edit</DescBtn>
                                    <DescBtn onClick={() => removeTodo(remove, el)}>Delete</DescBtn>
                                </DescWrapper>
                            </>
                        )}
                    </Desc>
                );
            })}
        </>
    );
});

export default TodoDesc;
