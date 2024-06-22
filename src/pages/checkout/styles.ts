import styled from "styled-components";
export const ContainerJogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 20px 0px 20px;
  gap: 5px;
  .total {
    color: #141212;
    font-family: poppins, sans-serif;
    font-weight: 800;
    font-size: 20px;
    padding-left: 30px;
  }
`;

export const ContainerMain = styled.div`
  max-width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    color: #000000;
    font-family: poppins, sans-serif;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  h2 {
    color: #141212;
    font-family: poppins, sans-serif;
    font-weight: 800;
    font-size: 20px;
    padding-bottom: 10px;
    padding-left: 30px;
  }
  .botao {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 10px;
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
