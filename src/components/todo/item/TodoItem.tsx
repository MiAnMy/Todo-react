import React from "react";
import todoStore from "../../../store/todo";
import { Todo } from "../../../types/types";
import { MdDone, MdDelete } from "react-icons/md";
import Button from "../../button/Button";
import StyledTodoItem from "./TodoItem.styled";

type Props = Omit<Todo, "visible">;

const TodoItem: React.FC<Props> = ({ id, task, done }) => {
  const removeTodo = todoStore((state) => state.removeTodo);
  const doneTodo = todoStore((state) => state.doneTodo);

  return (
    <StyledTodoItem done={done}>
      <p>{task}</p>
      <div>
        <Button onClick={() => doneTodo(id)}>
          <MdDone />
        </Button>
        <Button onClick={() => removeTodo(id)}>
          <MdDelete />
        </Button>
      </div>
    </StyledTodoItem>
  );
};

export default TodoItem;
