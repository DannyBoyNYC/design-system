import styled from "styled-components";

export const ButtonExtending = styled.button`
  background: #fff;
  color: #333;
  font-size: 1em;
  margin: 1em;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonExtendingPrimary = styled(ButtonExtending)`
  color: #fff;
  background: #337ab7;
  border-color: #2e6da4;
`;

export const ButtonExtendingSuccess = styled(ButtonExtending)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
`;

export const ButtonExtendingLink = styled(ButtonExtending)`
  color: #337ab7;
  background-color: transparent;
  border: none;
  border-radius: 0;
  font-weight: 400;
`;
