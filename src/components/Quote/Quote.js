import styled from "styled-components";

const Quote = styled.div`
    font-size:36px;
    text-align:center;
    position:absolute;
    bottom:86px;
    left:0;
    right:0;
    margin:0 auto;
    color:#fff;
    padding:0 85px;
    p{
        font-size:18px;
        color:#949EA8;
        &:before{
            content: "";
            background-color: #22D486;
            width: 10px;
            height: 2px;
            display: block;
            margin: 15px auto;
        }
    }
`;

export default Quote;