import React, { useRef } from "react";
import Button from "../../button/Button";
import StyledTodoAdd from "./TodoAdd.styled";
import { MdAdd } from "react-icons/md";
import todoStore from "../../../store/todo";

const TodoAdd: React.FC = () => {
  const addTodo = todoStore((state) => state.addTodo);
  const input = useRef<HTMLInputElement>(null);

  const submit = () => {
    const task = input.current?.value;
    if (!task) return;
    addTodo(task);
    input.current.value = "";
  };

  return (
    <StyledTodoAdd>
      <input
        spellCheck="false"
        type="text"
        placeholder="Add Task"
        ref={input}
      />
      <Button onClick={submit}>
        <MdAdd />
      </Button>
    </StyledTodoAdd>
  );
};

export default TodoAdd;
