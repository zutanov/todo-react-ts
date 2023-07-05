import styled from 'styled-components';

export const Create = styled.div``;

export const CreateWrapper = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const CreateInp = styled.input`
    width: 428px;
    height: 20px;
    border-radius: 5px;
    padding: 8px;
    background-color: #f8f8f2;
    border: 2px solid #bd93f9;
    outline: none;
`;

export const CreateBtn = styled.button`
    width: 80px;
    border-radius: 5px;
    padding: 8px;
    background-color: #f8f8f2;
    border: 2px solid #bd93f9;
    transition: 0.4s;
    &:hover {
        background-color: #bd93f9;
        color: #fff;
    }
`;
