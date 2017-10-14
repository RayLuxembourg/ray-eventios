import  styled  from "styled-components";

const ActionFloatButton = styled.button`
  background: #323c46;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.15);
  width:56px;
  height:56px;
  position:fixed;
  right:32px;
  bottom:32px;
  color:#fff;
  border-radius:50%;
  border:none;
  outline:none;
  text-align:center;
  font-size:32px;
  padding:0;
  cursor:pointer;
`;
ActionFloatButton.content = styled.span`
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left:0;
  right:0;
  font-size: 30px;
  height: 40px;
`;
export default ActionFloatButton;