import create from "zustand";
import { persist } from "zustand/middleware";
import { FilterState } from "../types/types";

const filterStore = create<FilterState, [["zustand/persist", FilterState]]>(
  persist(
    (set) => ({
      filter: "all",
      setFilter: (filter) =>
        set((state) => ({
          ...state,
          filter,
        })),
    }),
    { name: "filter" }
  )
);

export default filterStore;
