import styled from "styled-components";
import { cores } from "../../../theme";

export const TextAreaMoleculeStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: ${cores.marrom_terra};
  min-width: 250px;
`;

export const TextAreaAtomStyled = styled.textarea`
  background-color: transparent;
  padding: 5px;
  border-radius: 8px;
  outline: none;
  border: 1px solid black;
  font-size: 18px;
`;

export const LabelAtomStyled = styled.label`
  font-size: 18px;
`;
