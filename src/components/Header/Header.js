import styled from "styled-components";
import {Media} from "../../utils";
const Header = styled.header`
    position:fixed;
    top:30px;
    width:100%;
    height:48px;
    padding:0 40px;
    z-index:10;
${Media.mobile`position:static;margin-top:24px;margin-bottom:70px`}    
`
export default Header;
