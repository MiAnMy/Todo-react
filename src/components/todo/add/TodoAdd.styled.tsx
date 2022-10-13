import styled from "styled-components";

const StyledTodoAdd = styled.div`
  display: flex;
  gap: 5px;

  & > input {
    border: 0;
    background-color: var(--background-color);
    border-bottom: 1px solid var(--border);
    color: var(--color);
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

export default StyledTodoAdd;
