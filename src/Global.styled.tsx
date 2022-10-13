import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --background-color: #000002;
  --color: #f8f6fb;
  --border: #292639;
  --done: #386055;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: clamp(12px, 2.25vmin, 19px);
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--border);
}

* {
  margin: 0;
  padding: 0;
  outline: none;
}

body {
  height: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;

export default GlobalStyles;
