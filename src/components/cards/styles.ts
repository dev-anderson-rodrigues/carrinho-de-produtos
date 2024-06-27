import styled from "styled-components";

export const Container = styled.div<{ $pageCar?: boolean }>`
  &.flex-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    max-height: 420px; /* Defina a altura máxima desejada */
    overflow-y: auto; /* Habilite a rolagem vertical */
    padding: 1rem;
    padding-bottom: 2rem;
    z-index: 0;
  }

  &.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: 665px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    width: 150px;

    &.img-container-page-car {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      border-radius: 10px;
      background-color: #ffffff;
      /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
      width: 100%;
      height: 150px;
      margin-bottom: 10px;

      div p {
        font-weight: 700;
        font-family: poppins, sans-serif;
        padding-right: 10px;
        gap: 7px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
      }
      div h3 {
        font-weight: 600;
        font-family: poppins, sans-serif;
        font-size: 25px;
        color: #000000;
        padding-right: 5px;
      }
      div .buttons {
        margin-top: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        .button-page-car {
          background-color: #6950a1;
          color: #ffffff;
          font-weight: 900;
          font-family: poppins, sans-serif;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 25px;
          width: 40%;
          align-items: center;
          justify-content: center;
        }
      }
    }

    img {
      height: 150px;
      width: 150px;
    }

    label {
      display: flex;
      span {
        padding: 6px 0px 6px 5px;
        p {
          font-size: 15px;
          font-weight: 600;
          font-family: poppins, sans-serif;
          color: #000000;
          padding-right: 5px;
          cursor: pointer;
        }

        input[type="checkbox"] {
          display: none;
        }

        .customcheckbox {
          width: 18px;
          height: 18px;
          border: 1px solid #6950a1;
          display: inline-block;
          border-radius: 6px;
          position: relative;
          z-index: 100;
          cursor: pointer;
        }

        /* Estilo do checkmark dentro do checkbox */
        .customcheckbox::after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 2px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: transparent;
          transition: background-color 0.3s;
          z-index: 0;
        }

        input[type="checkbox"]:checked + .customcheckbox::after {
          background-color: #6950a1;
        }
      }
    }
  }
`;
