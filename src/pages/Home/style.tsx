import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../theme";

export const SubtitleHomeDivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubtitleHomeSeeAll = styled(Link)`
  color: ${cores.marrom_terra};
  text-decoration: none;
  font-weight: bold;
`;
