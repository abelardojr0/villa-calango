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

export const Quartos = () => {
  const [quartos, setQuartos] = useState<any>();

  async function buscarQuartos() {
    const { data }: any = await axios.get("http://localhost:3000/quartos");
    setQuartos(data);
  }

  useEffect(() => {
    buscarQuartos();
  }, []);
  return (
    <>
      <TitlePage>Quartos</TitlePage>
      <SubtitlePage>Lista de quartos</SubtitlePage>
      <ContainerGrid>
        {quartos &&
          quartos.map((quarto: any) => (
            <CardDefault to={`/quartos/${quarto.id}`}>
              <CardTitle>
                Nome: <CardText>{quarto.nome}</CardText>
              </CardTitle>
              <CardTitle>
                Tipo: <CardText>{quarto.tipo}</CardText>
              </CardTitle>
              <CardTitle>
                Capacidade: <CardText>{quarto.capacidade}</CardText>
              </CardTitle>
              <CardTitle>
                Status: <CardText>{quarto.status}</CardText>
              </CardTitle>
            </CardDefault>
          ))}
        <CardAdd to={`/quartos/registro`}>
          <h2>Adicionar novo quarto</h2>
        </CardAdd>
      </ContainerGrid>
    </>
  );
};
