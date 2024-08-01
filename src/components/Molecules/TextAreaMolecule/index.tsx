import {
  TextAreaMoleculeStyled,
  LabelAtomStyled,
  TextAreaAtomStyled,
} from "./style";

interface TextAreaMoleculeProps {
  htmlFor: string;
  children: string;
  type: string;
  id: string;
  placeholder?: string;
  cols: number;
  rows: number;
  onChange?: (e: any) => void;
  value?: string;
}
export const TextAreaMolecule = ({
  children,
  ...props
}: TextAreaMoleculeProps) => {
  return (
    <TextAreaMoleculeStyled>
      <LabelAtomStyled {...props}>{children}</LabelAtomStyled>
      <TextAreaAtomStyled {...props} />
    </TextAreaMoleculeStyled>
  );
};
