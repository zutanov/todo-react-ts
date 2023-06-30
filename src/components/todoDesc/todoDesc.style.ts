import styled from 'styled-components';
import { CreateBtn, CreateInp } from '../todoCreate/todoCreate.style';

export const Desc = styled.div``;

export const DescWrapper = styled.div`
    display: flex;
    padding: 15px 10px;
    text-align: left;
`;

export const DescInp = styled.input`
    zoom: 1.5;
`;
export const DescEdit = styled(CreateInp)`
    width: 160px;
    height: 15px;
`;

export const DescText = styled.div`
    margin-left: 10px;
    text-align: left;
`;

export const DescBtn = styled(CreateBtn)`
    margin-right: 15px;
`;
