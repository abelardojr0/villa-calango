import {
  SelectMoleculeStyled,
  SelectAtomStyled,
  LabelAtomStyled,
} from "./style";

interface SelectMoleculeProps {
  htmlFor: string;
  children: string;
  id: string;
  onChange?: (e: any) => void;
  options: any[];
  value?: string;
}
export const SelectMolecule = ({
  children,
  options,
  ...props
}: SelectMoleculeProps) => {
  return (
    <SelectMoleculeStyled>
      <LabelAtomStyled {...props}>{children}</LabelAtomStyled>
      <SelectAtomStyled {...props}>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </SelectAtomStyled>
    </SelectMoleculeStyled>
  );
};
