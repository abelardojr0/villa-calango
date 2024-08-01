import styled from "styled-components";
import { cores } from "../../../theme";

export const SelectMoleculeStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: ${cores.marrom_terra};
  min-width: 250px;
`;

export const SelectAtomStyled = styled.select`
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid black;
  font-size: 22px;
`;

export const LabelAtomStyled = styled.label`
  font-size: 18px;
`;
