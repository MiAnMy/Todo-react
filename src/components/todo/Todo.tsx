import React from "react";
import TodoAdd from "./add/TodoAdd";
import TodoContainer from "./container/TodoContainer";
import TodoFilters from "./filters/TodoFilters";
import StyledTodo from "./Todo.styled";

const Todo: React.FC = () => (
  <StyledTodo>
    <TodoAdd />
    <TodoFilters />
    <TodoContainer />
  </StyledTodo>
);

export default Todo;
