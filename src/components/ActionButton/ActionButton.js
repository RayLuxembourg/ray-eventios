import styled from "styled-components";

const ActionFloatButton = styled.button`
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.15);
  width: 56px;
  height: 56px;
  position: fixed;
  right: 32px;
  bottom: 32px;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 32px;
  padding: 0;
  cursor: pointer;
  opacity:1;
  transition:opacity .2s ease-out;
  &:hover {
    opacity:.9;
    transition:opacity .2s ease-in;    
  }
`;
ActionFloatButton.content = styled.img``;
export default ActionFloatButton;
