import React from "react";
import styled from "styled-components";
import { Media } from "../../utils";

const HeadlineStyle = styled.div`
${Media.mobile`text-align:center!important`}
  h1 {
    font-size: 28px;
    color: #323c46;
    letter-spacing: 0;
    line-height: 48px;
  }
  p {
    font-family: Roboto;
    font-size: 18px;
    color: #949ea8;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 40px;
    &.error{
      color: #ff4081;
    }
  }
`;

const Headline = ({ title, subtitle, errorMsg }) => {
  return (
    <HeadlineStyle>
      <h1>{title}</h1>
      <p className={errorMsg ? "error" : null}>{errorMsg || subtitle}</p>
    </HeadlineStyle>
  );
};

export default Headline;
