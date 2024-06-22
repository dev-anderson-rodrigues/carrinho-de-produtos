import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  border: 4px solid #6950a1;
  height: 60px;
  width: 100%;
  color: #0a0909;
  font-weight: 400;
  font-family: poppins, sans-serif;
  z-index: 100;

  div {
    display: flex;
    justify-content: space-around;

    .group-div {
      height: 25px;
    }
  }
  span {
    font-weight: 600;
    font-family: poppins, sans-serif;
    font-size: 12px;
    width: 100%;
    margin-left: 30px;
  }
`;
