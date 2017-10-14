import styled from "styled-components";
const UserMenu = styled.ul`
    position: absolute;
    background: #ffffff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    border-radius: 14px;
    // bottom: -100px;
    right: 20px;
    padding: 16px 16px;
    list-style: none;
    min-width:162px;
    display:none;
    display:${(props) => props ? "list-item" : ""}

    &:after{
    content:"",
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 12px 14px;
    border-color: transparent transparent #ffffff transparent;
    z-index:11;
    }
`;
UserMenu.Item = styled.li`
  font-size: 14px;
  color: #9ca5af;
  letter-spacing: 0;
  margin-bottom: 8px;
  a {
    all: unset;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export default UserMenu;
