import { ButtonAtomStyled } from "./style";

interface ButtonAtomProps {
  children: string;
  onClick?: () => void;
}
export const ButtonAtom = ({ children, ...props }: ButtonAtomProps) => {
  return <ButtonAtomStyled {...props}>{children}</ButtonAtomStyled>;
};
