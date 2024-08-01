import { Outlet } from "react-router-dom";
import {
  Container,
  ContainerSection,
  HeaderList,
  HeaderListItem,
  HeaderLogoStyled,
  HeaderStyled,
} from "./style";
import logo from "../../assets/logo.png";
export const Layout = () => {
  return (
    <Container>
      <HeaderStyled>
        <HeaderLogoStyled to={"/"}>
          <img src={logo} alt="Logo" />
        </HeaderLogoStyled>
        <nav>
          <HeaderList>
            <li>
              <HeaderListItem to={"/"}>Home</HeaderListItem>
            </li>

            <li>
              <HeaderListItem to={"/quartos"}>Quartos</HeaderListItem>
            </li>

            <li>
              <HeaderListItem to={"/clientes"}>Clientes</HeaderListItem>
            </li>
          </HeaderList>
        </nav>
      </HeaderStyled>
      <ContainerSection>
        <Outlet />
      </ContainerSection>
    </Container>
  );
};
