import {
  BoxInputMoleculeStyled,
  InputAtomStyled,
  LabelAtomStyled,
} from "./style";

interface BoxInputMoleculeProps {
  htmlFor: string;
  children: string;
  type: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
}
export const BoxInputMolecule = ({
  children,
  ...props
}: BoxInputMoleculeProps) => {
  return (
    <BoxInputMoleculeStyled>
      <LabelAtomStyled {...props}>{children}</LabelAtomStyled>
      <InputAtomStyled {...props} />
    </BoxInputMoleculeStyled>
  );
};
