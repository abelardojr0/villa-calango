import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../../theme";

export const CardAddStyled = styled(Link)`
  background-color: ${cores.verde_menta_escuro};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 15px;
  color: ${cores.marrom_terra};
  text-decoration: none;
  font-size: 30px;
  text-align: center;
  transition: 0.4s ease-in-out;
  border: 1px solid ${cores.marrom_terra};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.05);
  }
`;
