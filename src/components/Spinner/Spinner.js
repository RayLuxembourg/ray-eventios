import styled,{keyframes} from "styled-components";
const Spining  = keyframes`
    0%{
        transform: rotate(0deg);        
    }
    100%{
        transform: rotate(360deg);        
    }
`;
const Spinner = styled.img`
  animation 1.5s ${Spining} infinite linear;
  display:block;
  margin:0 auto;
  width:15%;
`;

export default Spinner;
