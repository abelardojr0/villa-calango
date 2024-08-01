import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../theme";

export const Container = styled.main`
  display: flex;
  height: 100vh;
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${cores.azul_serenity};
  width: 12vw;
  padding-top: 40px;
`;

export const HeaderLogoStyled = styled(Link)`
  img {
    max-width: 180px;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const HeaderListItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #a5a3a3;
  }
`;

export const ContainerSection = styled.section`
  background-color: ${cores.bege_suave};
  width: 88vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;
`;
