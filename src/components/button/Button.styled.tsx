import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.25rem;
  color: var(--color);
  background-color: var(--background-color);
  cursor: pointer;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledButton;
