import styled from "styled-components";
export const ContainerApp = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f8ff;
  display: flex;
`;

export const ContainerCenterApp = styled.div`
  max-width: 70%;
  height: 70%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const FooterBotoom = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;
export const ContainerMain = styled.div`
  background-color: #ffffff;
  min-width: 30vw;
  max-height: 600px;
`;
