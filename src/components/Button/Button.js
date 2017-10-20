import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import {spinnerIcon} from "../../assets"
const ButtonStyle = styled.button`
  all: unset;
  width: ${({ size, color, theme }) => theme.button.size[size].width};
  height: ${({ size, color, theme }) => theme.button.size[size].height};
  background-color: ${({ size, color, theme }) => theme.color[color]};
  font-size: 16px;
  border: none;
  color: #fff;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  letter-spacing: 1px;
  line-height: 32px;
  &:hover {
    background-color: ${({ size, color, theme }) =>
      theme.color.hover[color] || null};
  }
`;
ButtonStyle.propTypes = {
  theme: PropTypes.object.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};
ButtonStyle.defaultProps = {
  theme: {},
  size: "lg",
  color: "primary"
};

const Button = (props) => {
  const isLoading = () => {
    if (props.loading) {
      return <Spinner src={spinnerIcon} />;
    }
    return props.content;
  };
  return (
    <ButtonStyle  {...props}>
      {isLoading()}
    </ButtonStyle>
  );
};

export default Button;
