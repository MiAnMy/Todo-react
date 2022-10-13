export type Filter = "all" | "done" | "todo";

export interface FilterState {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export interface Todo {
  id: number;
  task: string;
  done: boolean;
  visible: boolean;
}

export interface TodoState {
  todos: Todo[];
  addTodo: (task: string) => void;
  removeTodo: (id: number) => void;
  doneTodo: (id: number) => void;
}
