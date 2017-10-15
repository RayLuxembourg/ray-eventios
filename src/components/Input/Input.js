import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { passwordIcon } from "../../assets";
const InputLayout = styled.div`
  position: relative;
  width: 100%;
  // height: 56px;
  margin-bottom: 40px;
  // overflow:hidden;
  &:hover,
  &.active {
    label {
      transform: translateY(-10px);
      transition: transform 0.2s ease-in;
    }
  }
`;

const InputStyle = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid #dae1e7;
  padding: 10px 0;
  transition: border-color 0.2s ease-out;
  font-size: 18px;
  color: #323c46;
  letter-spacing: 0;
  &[type="password"] {
    background-image: url(${passwordIcon});
    background-repeat: no-repeat;
    background-position: right;
  }

  &:focus,
  &:hover {
    border-color: #323c46;
    transition: border-color 0.2s ease-in;
  }
  &.error {
    border-color: #ff4081 !important;
    transition: border-color 0.2s ease-in;
  }
`;
const LabelStyle = styled.label`
  /* Email: */
  font-size: 14px;
  color: #d2d6da;
  letter-spacing: 0;
  transform: translateY(10px);
  position: absolute;
  z-index: 0;
  transition: transform 0.2s ease-out;
`;
const ErrorAlert = styled.small`
  font-size: 18px;
  margin-top: 10px;
  color: #ff4081;
  letter-spacing: 0;
  line-height: 24px;
  // display: none;
  display: block;
  transition: opacity ease-out 0.2s;
  opacity:0;
  float:left;
  &.show {
    display: block;
    opacity:1;
    transition: opacity ease-in 0.2s;
  }
`;

const Input = props => {
  const { touched, error } = props.meta;
  console.log(props);
  return (
    <InputLayout className={props.input.value ? "active" : null}>
      <LabelStyle>{props.label}</LabelStyle>
      <InputStyle
        {...props.input}
        type={props.type}
        className={props.error ? "error" : null}
      />
      {
        <ErrorAlert
          className={touched && error ? "show" : ""}
        >{`This field is ${error}`}</ErrorAlert>
      }
    </InputLayout>
  );
};

Input.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string
};

export default Input;
//
