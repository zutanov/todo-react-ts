import { memo } from 'react';
import { FilterBtn, FilterWrapper } from './todoFilter.style';

interface FilterFunction {
    active: number;
    changeActiveBtn: (status: number) => void;
}

const TodoFilter: React.FC<FilterFunction> = memo(({ active, changeActiveBtn }) => {
    return (
        <FilterWrapper>
            <FilterBtn isActive={active === 2} onClick={() => changeActiveBtn(2)}>
                Show All Tasks
            </FilterBtn>
            <FilterBtn isActive={active === 0} onClick={() => changeActiveBtn(0)}>
                Show Active Tasks
            </FilterBtn>
            <FilterBtn isActive={active === 1} onClick={() => changeActiveBtn(1)}>
                Show completed Tasks
            </FilterBtn>
        </FilterWrapper>
    );
});

export default TodoFilter;
