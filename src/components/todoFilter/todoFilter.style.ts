import styled from 'styled-components';

export type BtnProps = {
    isActive: boolean;
};

export const FilterWrapper = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

export const FilterBtn = styled.button<BtnProps>`
    border-radius: 5px;
    padding: 8px;
    background-color: ${({ isActive }) => (isActive ? '#bd93f9' : '#f8f8f2')};
    color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
    border: 2px solid #bd93f9;
    transition: 0.4s;
    width: 100%;
    &:hover {
        font-size: 13px;
        background-color: #bd93f9;
        color: #fff;
    }
`;
