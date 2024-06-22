import styled from "styled-components";
export const ContainerJogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMain = styled.div`
  max-width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;

  /* padding: 20px; */
  .botao {
    display: flex;
    width: 100%;
    justify-content: end;
    padding: 10px;
  }

  h1 {
    color: #000000;
    font-family: poppins, sans-serif;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    padding-left: 15px;
    padding-top: 10px;

    .countProducts {
      background-color: #6950a1;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 10px;
      margin-right: 50px;
    }
  }
  button {
    background-color: #6950a1;
    color: #ffffff;
    font-weight: 600;
    font-family: poppins, sans-serif;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 20px 10px 20px;
    font-size: 15px;
    width: 250px;
  }
`;
