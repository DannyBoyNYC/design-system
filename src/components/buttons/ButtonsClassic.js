import styled from "styled-components";

export const ButtonBase = styled.button`
  background-color: #fff;
  color: #333;
  font-size: 1em;
  margin: 1em;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &.primary {
    color: #fff;
    background: #337ab7;
    border-color: #2e6da4;
  }
  &.success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  &.link {
    color: #337ab7;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: 400;
  }
  &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }
  &.disabled {
    color: #ddd;
    background-color: #aaa;
    border: 1px solid #aaa;
  }
`;
