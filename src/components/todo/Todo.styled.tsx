import styled from "styled-components";

const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  width: min-content;
  padding: 10px;
  gap: 10px;
  margin: 25px auto;
  width: 25rem;
  box-sizing: border-box;
  max-height: calc(100vh - 50px);
`;

export default StyledTodo;
