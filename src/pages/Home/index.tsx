import { CardDefault } from "../../components/Molecules/CardDefault";
import { ContainerGrid, SubtitlePage, TitlePage } from "../../GlobalStyles";
import { clientes } from "../../mocks/clientes";
import { quartos } from "../../mocks/quartos";
import { SubtitleHomeDivStyled, SubtitleHomeSeeAll } from "./style";
export const Home = () => {
  const quartos3 = quartos.slice(0, 3);
  const clientes3 = clientes.slice(0, 3);

  return (
    <>
      <TitlePage>Dashboard</TitlePage>

      <SubtitleHomeDivStyled>
        <SubtitlePage>Quartos</SubtitlePage>
        <SubtitleHomeSeeAll to={"/quartos"}>Ver todas</SubtitleHomeSeeAll>
      </SubtitleHomeDivStyled>
      <ContainerGrid columns={3}>
        {quartos3 &&
          quartos3.map((quarto) => (
            <CardDefault to={`/quartos/${quarto.id}`}>
              <h2>Nome: {quarto.nome}</h2>
              <p>Tipo: {quarto.tipo}</p>
              <p>Capacidade: {quarto.capacidade}</p>
              <p>Status: {quarto.status}</p>
            </CardDefault>
          ))}
      </ContainerGrid>

      <SubtitleHomeDivStyled>
        <SubtitlePage>Clientes</SubtitlePage>
        <SubtitleHomeSeeAll to={"/clientes"}>Ver todos</SubtitleHomeSeeAll>
      </SubtitleHomeDivStyled>

      <ContainerGrid columns={3}>
        {clientes3 &&
          clientes3.map((cliente) => (
            <CardDefault to={`/clientes/${cliente.id}`}>
              <h2>Nome: {cliente.nome}</h2>
              <p>E-mail: {cliente.email}</p>
              <p>Telefone: {cliente.telefone}</p>
              <p>Quarto: {cliente.quarto}</p>
              <p>Check-in: {cliente.dataCheckin}</p>
              <p>Check-out: {cliente.dataCheckout}</p>
            </CardDefault>
          ))}
      </ContainerGrid>
    </>
  );
};
