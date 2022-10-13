import create from "zustand";
import { persist } from "zustand/middleware";
import { TodoState } from "../types/types";
import { newTodo, removeTodo, doneTodo } from "../modules/todo";

const todoStore = create<TodoState, [["zustand/persist", TodoState]]>(
  persist(
    (set) => ({
      todos: [],
      addTodo: (task) =>
        set((state) => ({
          todos: [...state.todos, newTodo(task, state.todos.length)],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: removeTodo(state.todos, id),
        })),
      doneTodo: (id) => set((state) => ({ todos: doneTodo(state.todos, id) })),
    }),
    { name: "todo" }
  )
);

export default todoStore;
