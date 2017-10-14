import React from "react";
import styled,{keyframes} from "styled-components";
import {spinnerIcon} from "../../assets"
const Spining  = keyframes`
    0%{
        transform: rotate(0deg);        
    }
    100%{
        transform: rotate(360deg);        
    }
`;
const StyledSpinner = styled.img`
  animation 1.5s ${Spining} infinite linear;
  display:block;
  margin:0 auto;
  width:15%;
`;
const Spinner = () => {
  return (
    <StyledSpinner src={spinnerIcon}>
      
    </StyledSpinner>
  );
};

export default Spinner;
