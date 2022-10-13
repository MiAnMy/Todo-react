import React, { useMemo } from "react";
import { Filter } from "../../../types/types";
import {
  StyledTodoFilterLabel,
  StyledTodoFilterInput,
} from "./TodoFilter.styled";

type Props = {
  label: Filter;
  defaultChecked: boolean;
  onChange: (label: Filter) => void;
};

const TodoFilter: React.FC<Props> = ({ label, defaultChecked, onChange }) => {
  const upperLabel = useMemo(() => {
    return label[0].toUpperCase() + label.slice(1);
  }, [label]);

  return (
    <>
      <StyledTodoFilterInput
        type="radio"
        name="filters"
        id={"btn_" + label}
        value={label}
        defaultChecked={defaultChecked}
        onChange={() => onChange(label)}
      />
      <StyledTodoFilterLabel htmlFor={"btn_" + label}>
        {upperLabel}
      </StyledTodoFilterLabel>
    </>
  );
};

export default TodoFilter;
