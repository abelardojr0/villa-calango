import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../../theme";

export const CardDefaultStyled = styled(Link)`
  background-color: ${cores.verde_menta};
  display: flex;
  align-items: start;
  gap: 15px;
  flex-direction: column;
  border-radius: 8px;
  padding: 15px;
  color: ${cores.cinza_escuro};
  text-decoration: none;
  transition: 0.4s ease-in-out;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.05);
  }
`;
