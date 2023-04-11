import styled from "styled-components";

export const FontH1 = styled.h1`
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media (max-width: 587px) {
    flex-direction: column;
  }
`;
export const FontH2 = styled.h2`
  display: flex;
  color: rgb(127, 134, 148);
  align-items: center;
  justify-content: center;

  @media (max-width: 587px) {
    font-size: 19px;
  }
`;
export const FontP = styled.p`
  width: 262px;
  font-weight: 600;
  display: flex;
  color: rgb(144, 149, 163);
  justify-content: space-evenly;

  @media (min-width: 632px) {
    width: 248px;
    display: flex;
    justify-content: space-evenly;
  }
`;
export const FontH4 = styled.h4`
  color: #5b5e68;
  margin: 1px;
  margin-left: 20px;
`;
export const FontH5 = styled.h5`
  color: rgb(91, 94, 104);
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0px;
  :hover {
    color: rgb(60, 128, 188);
  }
`;
export const FontDivInfo = styled.div`
  color: white;
  font-weight: 300;
`;
