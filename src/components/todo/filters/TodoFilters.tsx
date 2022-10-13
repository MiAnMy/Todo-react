import React from "react";
import filterStore from "../../../store/filter";
import TodoFilter from "../filter/TodoFilter";
import StyledTodoFilters from "./TodoFilters.styled";

const TodoFilters: React.FC = () => {
  const filter = filterStore((state) => state.filter);
  const setFilter = filterStore((state) => state.setFilter);

  return (
    <StyledTodoFilters>
      <TodoFilter
        label="all"
        defaultChecked={filter === "all"}
        onChange={(filter) => setFilter(filter)}
      />
      <TodoFilter
        label="todo"
        defaultChecked={filter === "todo"}
        onChange={(filter) => setFilter(filter)}
      />
      <TodoFilter
        label="done"
        defaultChecked={filter === "done"}
        onChange={(filter) => setFilter(filter)}
      />
    </StyledTodoFilters>
  );
};

export default TodoFilters;
