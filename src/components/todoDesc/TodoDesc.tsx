import { useState } from 'react';
import { Desc, DescBtn, DescInp, DescText, DescWrapper, DescEdit } from './todoDesc.style';
import { list } from '../todoData/TodoData';

const TodoDesc = () => {
    const [showOrHide, setShowOrHide] = useState(false);
    const [btnSave, setBtnSave] = useState('Edit');
    const [btnCancel, setBtnCancel] = useState('Delete');
    const [text, setText] = useState('');

    const data = [...list];

    let edit = { display: 'none' };
    let hide = { display: 'flex' };

    const editTask = () => {
        setShowOrHide(!showOrHide);
        setBtnSave('Save');
        setBtnCancel('Cancel');
    };

    const editor = (str: string) => {
        setText(str);
    };

    return (
        <>
            {data.map(el => (
                <Desc key={el.id}>
                    <DescWrapper style={{ display: showOrHide ? 'none' : 'flex' }}>
                        <DescInp type='checkbox' defaultChecked={el.completed} />
                        <DescText>{el.title}</DescText>
                    </DescWrapper>
                    <DescWrapper style={{ display: showOrHide ? 'flex' : 'none' }}>
                        <DescEdit defaultValue={el.title} />
                    </DescWrapper>
                    <DescWrapper>
                        <DescBtn onClick={editTask}>{btnSave}</DescBtn>
                        <DescBtn>{btnCancel}</DescBtn>
                    </DescWrapper>
                </Desc>
            ))}
        </>
    );
};

export default TodoDesc;
