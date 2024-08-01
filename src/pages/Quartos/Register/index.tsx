import { ButtonAtom } from "../../../components/Atoms/ButtonAtom";
import { BoxInputMolecule } from "../../../components/Molecules/BoxInputMolecule";
import { SelectMolecule } from "../../../components/Molecules/SelectMolecule";
import { TitlePage } from "../../../GlobalStyles";
import { FormquartosStyled } from "./style";

export const QuartosRegistro = () => {
  async function onSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <>
      <TitlePage>Registrar Quarto</TitlePage>
      <FormquartosStyled onSubmit={onSubmit}>
        <BoxInputMolecule
          type="text"
          htmlFor="nome"
          id="nome"
          children="Nome do Quarto"
        />
        <SelectMolecule
          children="Tipo de Quarto"
          htmlFor="tipo"
          id="tipo"
          options={[
            { value: "suite", text: "Suíte" },
            { value: "standard", text: "Standard" },
            { value: "familiar", text: "Familiar" },
            { value: "economico", text: "Econômico" },
          ]}
        />
        <BoxInputMolecule
          type="number"
          htmlFor="capacidade"
          id="capacidade"
          children="Capacidade do Quarto"
        />
        <SelectMolecule
          children="Status do Quarto"
          htmlFor="status"
          id="status"
          options={[
            { value: "disponivel", text: "Disponível" },
            { value: "reservado", text: "Reservado" },
            { value: "manutencao", text: "Em Manutenção" },
          ]}
        />

        <ButtonAtom>Cadastrar</ButtonAtom>
      </FormquartosStyled>
    </>
  );
};
