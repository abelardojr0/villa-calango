import { ReactNode } from "react";
import { CardDefaultStyled } from "./style";

interface CardDefaultProps {
  to: string;
  children: ReactNode;
}
export const CardDefault = ({ to, children }: CardDefaultProps) => {
  return <CardDefaultStyled to={to}>{children}</CardDefaultStyled>;
};
