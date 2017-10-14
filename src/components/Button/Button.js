import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
const ButtonStyle = styled.button`
  all: unset;
  width: ${({ size, type, theme }) => theme.button.size[size].width};
  height: ${({ size, type, theme }) => theme.button.size[size].height};
  background-color: ${({ size, type, theme }) => theme.color[type]};
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
    background-color: ${({ size, type, theme }) =>
      theme.color.hover[type] || null};
  }
`;
ButtonStyle.propTypes = {
  theme: PropTypes.object.isRequired,
  type: PropTypes.string,
  size: PropTypes.string
};
ButtonStyle.defaultProps = {
  theme: {},
  size: "lg",
  type: "primary"
};

const Button = (props) => {
  const isLoading = () => {
    if (props.loading) {
      return <Spinner />;
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
