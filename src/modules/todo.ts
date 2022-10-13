import { Todo } from "../types/types";

const newTodo = (task: string, length: number): Todo => ({
  id: length + 1,
  task,
  done: false,
  visible: true,
});

const removeTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.map((todo) => {
    if (todo.id === id) todo.visible = false;
    return todo;
  });
};

const doneTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.map((todo) => {
    if (todo.id === id) todo.done = !todo.done;
    return todo;
  });
};

export { newTodo, removeTodo, doneTodo };
