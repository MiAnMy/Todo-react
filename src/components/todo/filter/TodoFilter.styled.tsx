import styled from "styled-components";

const StyledTodoFilterLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & input {
    display: none;
  }
`;

const StyledTodoFilterInput = styled.input`
  display: none;

  &:checked + ${StyledTodoFilterLabel} {
    --border-size: 1px;
    border: var(--border-size) solid var(--border);
    padding: calc(0.75rem - var(--border-size));
  }
`;

export { StyledTodoFilterLabel, StyledTodoFilterInput };
