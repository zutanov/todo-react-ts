import { FilterBtn, FilterWrapper } from './todoFilter.style';

const TodoFilter = () => {
    return (
        <FilterWrapper>
            <FilterBtn>Show All Tasks</FilterBtn>
            <FilterBtn>Show Active Tasks</FilterBtn>
            <FilterBtn>Show completed Tasks</FilterBtn>
        </FilterWrapper>
    );
};

export default TodoFilter;
