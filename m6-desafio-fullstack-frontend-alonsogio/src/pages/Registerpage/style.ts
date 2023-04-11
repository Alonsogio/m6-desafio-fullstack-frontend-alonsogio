import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { TiPhone } from "react-icons/ti";
import styled from "styled-components";

export const PersonCard = styled(BsFillPersonVcardFill)`
  font-size: 23px;
  color: #a9acb3;
`;
export const MailIcon = styled(MdMail)`
  font-size: 23px;
  color: #a9acb3;
`;
export const EyeIcon = styled(AiFillEye)`
  font-size: 23px;
  color: #a9acb3;
`;
export const PhoneIcon = styled(TiPhone)`
  font-size: 23px;
  color: #a9acb3;
`;

export const Errorspan = styled.span`
  color: rgb(232, 63, 91);
  font-size: 14px;
  margin-left: 28px;
`;
export const Pontospan = styled.span`
  height: 58px;
  color: rgb(27, 137, 230);
  font-size: 69px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

export const BodyContainer = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
