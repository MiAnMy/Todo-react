import React, { useMemo } from "react";
import filterStore from "../../../store/filter";
import todoStore from "../../../store/todo";
import TodoItem from "../item/TodoItem";
import StyledTodoContainer from "./TodoContainer.styled";

const TodoContainer: React.FC = () => {
  const todos = todoStore((state) => state.todos);
  const filter = filterStore((state) => state.filter);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "todo":
        return todos.filter((todo) => todo.done === false && todo);
      case "done":
        return todos.filter((todo) => todo.done === true && todo);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <StyledTodoContainer>
      {filteredTodos.map(
        ({ id, task, done, visible }) =>
          visible && <TodoItem task={task} done={done} key={id} id={id} />
      )}
    </StyledTodoContainer>
  );
};

export default TodoContainer;
