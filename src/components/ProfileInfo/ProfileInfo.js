import styled from "styled-components";
import {Media} from "../../utils";
const ProfileInfo = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  width: 100%;
  min-height: 187px;
  text-align: center;
  padding-top: 83px;
  position:relative;
  ${Media.mobile`margin-top:5em`}
`;
ProfileInfo.Profile = styled.div`
  color: #949ea8;
  background: #d9dce1;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  line-height: 120px;
  font-size: 28px;
  
`;
ProfileInfo.Title = styled.h3`
  font-size: 18px;
  color: #323c46;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  height: 48px;
`;
ProfileInfo.Sub = styled.small`
  font-size: 14px;
  color: #949ea8;
  letter-spacing: 0;
  line-height: 24px;
`;
export default ProfileInfo;
