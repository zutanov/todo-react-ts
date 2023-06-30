import styled from 'styled-components';
import { CreateWrapper, CreateBtn } from '../todoCreate/todoCreate.style';

export const FilterWrapper = styled(CreateWrapper)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

export const FilterBtn = styled(CreateBtn)`
    width: 100%;
    transition: 0.4s;
    &:hover {
        font-size: 14px;
        background-color: #bd93f9;
        color: #fff;
    }
`;
