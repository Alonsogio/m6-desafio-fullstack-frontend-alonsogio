import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  top: 0;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: rgba(33, 37, 41, 0.99);
  position: fixed;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @media (min-width: 800px) {
    width: 50%;
    height: 58%;
  }
`;

export const FormModalStyle = styled.form`
  width: 86%;
  display: flex;
  flex-direction: column;
  -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
export const DivCloseModal = styled.div`
  background-color: rgba(33, 37, 41, 0.99);
  display: flex;
  align-items: center;
  padding: 7px 20px;
  flex-direction: row-reverse;
  -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
export const BodyModal = styled.div`
  display: flex;
  justify-content: center;
`;
