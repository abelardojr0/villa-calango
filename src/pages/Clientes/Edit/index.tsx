import { useEffect, useState } from "react";
import { ButtonAtom } from "../../../components/Atoms/ButtonAtom";
import { BoxInputMolecule } from "../../../components/Molecules/BoxInputMolecule";
import { SelectMolecule } from "../../../components/Molecules/SelectMolecule";
import { TextAreaMolecule } from "../../../components/Molecules/TextAreaMolecule";
import { TitlePage } from "../../../GlobalStyles";
import { FormDiv, FormquartosStyled } from "./style";
import { clientes } from "../../../mocks/clientes";
import { useParams } from "react-router-dom";

export const ClientesEdit = () => {
  const [cliente, setCliente] = useState<any>();
  const [nome, setNome] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [dataNasc, setDataNasc] = useState<string>();
  const [dataCheckIn, setDataCheckIn] = useState<string>();
  const [dataCheckOut, setDataCheckOut] = useState<string>();
  const [quarto, setQuarto] = useState<string>();
  const [observacoes, setObservacoes] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    clientes.forEach((item) => {
      if (id) {
        if (item.id === +id) {
          setCliente(item);
        }
      }
    });
  }, [clientes]);

  useEffect(() => {
    if (cliente) {
      setNome(cliente.nome);
      setTelefone(cliente.telefone);
      setEmail(cliente.email);
      setDataNasc(cliente.dataNasc);
      setDataCheckIn(cliente.dataCheckin);
      setDataCheckOut(cliente.dataCheckout);
      setQuarto(cliente.quarto);
      setObservacoes(cliente.observacoes);
    }
  }, [cliente]);

  async function onSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <>
      <TitlePage>Editar Cliente</TitlePage>
      <FormquartosStyled onSubmit={onSubmit}>
        <BoxInputMolecule
          type="text"
          htmlFor="nome"
          id="nome"
          children="Nome do Cliente"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <FormDiv>
          <BoxInputMolecule
            type="email"
            htmlFor="email"
            id="email"
            children="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <BoxInputMolecule
            type="tel"
            htmlFor="telefone"
            id="telefone"
            children="Telefone"
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
          />
        </FormDiv>
        <FormDiv>
          <BoxInputMolecule
            type="date"
            htmlFor="dataNascimento"
            id="dataNascimento"
            children="Data de Nascimento"
            value={dataNasc}
            onChange={({ target }) => setDataNasc(target.value)}
          />
          <SelectMolecule
            children="Quarto"
            htmlFor="quarto"
            id="quarto"
            value={quarto}
            onChange={({ target }) => setQuarto(target.value)}
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
            value={dataCheckIn}
            onChange={({ target }) => setDataCheckIn(target.value)}
          />
          <BoxInputMolecule
            type="date"
            htmlFor="dataCheckout"
            id="dataCheckout"
            children="Data de Check-out"
            value={dataCheckOut}
            onChange={({ target }) => setDataCheckOut(target.value)}
          />
        </FormDiv>

        <TextAreaMolecule
          cols={25}
          rows={6}
          type="textarea"
          htmlFor="observacoes"
          id="observacoes"
          children="Observações"
          value={observacoes}
          onChange={({ target }) => setObservacoes(target.value)}
        />
        <ButtonAtom>Salvar</ButtonAtom>
      </FormquartosStyled>
    </>
  );
};
