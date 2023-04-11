import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";
export const DivloadingBc = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;
export const LoadingContentDiv = styled.div`
  text-align: center;
`;
export const LoadingIcon = styled(AiOutlineLoading)`
  color: rgb(27, 145, 245);
  width: 70px;
  height: 70px;
`;
export const IconDiv = styled.div`
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
