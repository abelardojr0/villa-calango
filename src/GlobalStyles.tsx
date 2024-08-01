import styled, { createGlobalStyle } from "styled-components";
import { cores } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: "Poppins", sans-serif;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    color: ${cores.cinza_escuro};
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const TitlePage = styled.h1`
  font-size: 48px;
  font-family: "Roboto Condensed", sans-serif;
  color: ${cores.marrom_terra};
  margin-bottom: 30px;
`;

export const SubtitlePage = styled.h2`
  font-size: 28px;
  margin-top: 40px;
  color: ${cores.marrom_terra};
`;

interface Props {
  columns?: number;
}
export const ContainerGrid = styled.section<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 4}, 1fr);
  gap: 15px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  color: ${cores.marrom_terra};
  font-weight: bold;
`;

export const CardText = styled.span`
  font-size: 18px;
  color: ${cores.cinza_escuro};
  font-weight: 400;
`;
