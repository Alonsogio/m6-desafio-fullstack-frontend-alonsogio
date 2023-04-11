import { MdLogout } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

export const LogoutIcon = styled(MdLogout)`
  font-size: 26px;
  color: #a9acb3;
  &:hover {
    color: white;
    transition: 0.5s ease;
  }
`;
export const PersonIcon = styled(IoPersonCircleSharp)`
  font-size: 30px;
  color: #a9acb3;
`;
export const TrashIcon = styled(FaTrashAlt)`
  font-size: 18px;
  color: #a9acb3;
  cursor: pointer;
  &:hover {
    color: #1b91f5;
    transition: 0.5s ease;
  }
`;
export const EditIcon = styled(FiEdit)`
  font-size: 18px;
  color: #a9acb3;
  cursor: pointer;
  &:hover {
    color: #1b91f5;
    transition: 0.5s ease;
  }
`;
export const BtnCreate = styled.button`
  background-color: #1b91f5;
  border: none;
  color: white;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`;
export const UlContacts = styled.ul`
  display: flex;
  border: 2px solid rgb(27, 145, 245);
  height: 45vh;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
  width: 73%;
  overflow: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 587px) {
    width: 85%;
  }
`;

export const DivFontBtn = styled.div`
  width: 73%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 587px) {
    width: 85%;
  }
`;
export const LiCards = styled.li`
  list-style-type: none;
  width: 94%;
  display: flex;
  justify-content: space-around;
  background-color: rgb(50, 54, 69);
  padding: 16px 0px;
  box-shadow: rgba(27, 145, 245, 0.15) 5px 5px 23px;
  margin-bottom: 18px;
  align-items: center;

  @media (max-width: 587px) {
    flex-direction: column;
    height: 30%;
  }
`;
export const DivContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  margin-right: 32px;

  @media (max-width: 587px) {
    margin-right: 0;
  }
`;
export const DivMain = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DivInputModal = styled.div`
  height: 41px;
  padding: 10px 0px;
  border: 2px solid #bdbdbd14;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 18px;
  border-radius: 8px;
`;
export const InputModal = styled.input`
  font-size: 15px;
  color: white;
  padding: 3px;
  background-color: transparent;
  border-bottom: 2px solid rgb(60, 128, 188);
  border-top: none;
  border-left: none;
  border-right: none;
`;
