import { useEffect, useState } from "react";
import { CardAdd } from "../../../components/Molecules/CardAdd";
import { CardDefault } from "../../../components/Molecules/CardDefault";
import {
  CardText,
  CardTitle,
  ContainerGrid,
  SubtitlePage,
  TitlePage,
} from "../../../GlobalStyles";
import axios from "axios";

export const Clientes = () => {
  const [clientes, setClientes] = useState<any>();

  async function buscarClientes() {
    const { data }: any = await axios.get("http://localhost:3000/clientes");
    setClientes(data);
  }

  useEffect(() => {
    buscarClientes();
  }, []);
  return (
    <>
      <TitlePage>Clientes</TitlePage>
      <SubtitlePage>Lista de Clientes</SubtitlePage>
      <ContainerGrid>
        {clientes &&
          clientes.map((cliente: any) => (
            <CardDefault to={`/clientes/${cliente.id}`}>
              <CardTitle>
                Nome: <CardText>{cliente.nome}</CardText>{" "}
              </CardTitle>
              <CardTitle>
                E-mail: <CardText>{cliente.email}</CardText>{" "}
              </CardTitle>
              <CardTitle>
                Telefone: <CardText>{cliente.telefone}</CardText>
              </CardTitle>
              <CardTitle>
                Quarto: <CardText>{cliente.quarto}</CardText>
              </CardTitle>
              <CardTitle>
                Check-in: <CardText>{cliente.dataCheckin}</CardText>{" "}
              </CardTitle>
              <CardTitle>
                Check-out: <CardText>{cliente.dataCheckout}</CardText>
              </CardTitle>
            </CardDefault>
          ))}
        <CardAdd to={`/clientes/registro`}>
          <h2>Adicionar novo cliente</h2>
        </CardAdd>
      </ContainerGrid>
    </>
  );
};
