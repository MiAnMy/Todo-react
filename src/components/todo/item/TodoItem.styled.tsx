import styled from "styled-components";
import { Todo } from "../../../types/types";

type Prop = Pick<Todo, "done">;

const StyledTodoItem = styled.div<Prop>`
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  padding: 0.5rem;

  & p {
    flex: 1;
    font-size: 1.25rem;
    padding: 0.5rem;
    overflow-x: auto;
  }

  & div {
    display: flex;
  }

  ${({ done }) =>
    done &&
    `--border-size: 4px;
  border-bottom: var(--border-size) solid var(--done);
  padding-bottom: calc(0.5rem - var(--border-size) + 1px);`}
`;

export default StyledTodoItem;
