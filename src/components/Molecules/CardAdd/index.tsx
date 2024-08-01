import { ReactNode } from "react";
import { CardAddStyled } from "./style";

interface CardDefaultProps {
  to: string;
  children: ReactNode;
}
export const CardAdd = ({ to, children }: CardDefaultProps) => {
  return <CardAddStyled to={to}>{children}</CardAddStyled>;
};
