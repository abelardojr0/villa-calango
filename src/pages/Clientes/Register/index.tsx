import { ButtonAtom } from "../../../components/Atoms/ButtonAtom";
import { BoxInputMolecule } from "../../../components/Molecules/BoxInputMolecule";
import { SelectMolecule } from "../../../components/Molecules/SelectMolecule";
import { TextAreaMolecule } from "../../../components/Molecules/TextAreaMolecule";
import { TitlePage } from "../../../GlobalStyles";
import { FormDiv, FormquartosStyled } from "./style";

export const ClientesRegistro = () => {
  async function onSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <>
      <TitlePage>Registrar Cliente</TitlePage>
      <FormquartosStyled onSubmit={onSubmit}>
        <BoxInputMolecule
          type="text"
          htmlFor="nome"
          id="nome"
          children="Nome do Cliente"
        />
        <FormDiv>
          <BoxInputMolecule
            type="email"
            htmlFor="email"
            id="email"
            children="E-mail"
          />
          <BoxInputMolecule
            type="tel"
            htmlFor="telefone"
            id="telefone"
            children="Telefone"
          />
        </FormDiv>
        <FormDiv>
          <BoxInputMolecule
            type="date"
            htmlFor="dataNascimento"
            id="dataNascimento"
            children="Data de Nascimento"
          />
          <SelectMolecule
            children="Quarto"
            htmlFor="quarto"
            id="quarto"
            options={[
              { value: "suiteLuxo", text: "Presidencial" },
              { value: "quartoStandard", text: "Quarto Padrão" },
              { value: "quartoEconomico", text: "Pequeno" },
              { value: "quartoFamiliar", text: "Quarto Grande" },
              { value: "suiteExecutiva", text: "Executivo" },
            ]}
          />
        </FormDiv>
        <FormDiv>
          <BoxInputMolecule
            type="date"
            htmlFor="dataCheckin"
            id="dataCheckin"
            children="Data de Check-in"
          />
          <BoxInputMolecule
            type="date"
            htmlFor="dataCheckout"
            id="dataCheckout"
            children="Data de Check-out"
          />
        </FormDiv>

        <TextAreaMolecule
          cols={25}
          rows={6}
          type="textarea"
          htmlFor="observacoes"
          id="observacoes"
          children="Observações"
        />
        <ButtonAtom>Cadastrar</ButtonAtom>
      </FormquartosStyled>
    </>
  );
};
