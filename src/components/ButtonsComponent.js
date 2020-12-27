import styled from "styled-components";
// https://www.freecodecamp.org/news/visual-variants-for-react-components-with-styled-components-dfaff6a76273/
export const ButtonComponent = styled.button`
  background: ${(props) => (props.primary ? "#337ab7" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  font-size: 1em;
  margin: 1em;
  padding: 6px 12px;
  border: ${(props) =>
    props.primary ? "1px solid #2e6da4" : "1px solid #ccc"};
  border-radius: 4px;
  cursor: pointer;
`;
