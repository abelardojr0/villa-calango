import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Quartos } from "./pages/Quartos/Dashboard";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./GlobalStyles";
import { QuartosDetalhes } from "./pages/Quartos/Details";
import { QuartosRegistro } from "./pages/Quartos/Register";
import { Clientes } from "./pages/Clientes/Dashboard";
import { ClientesRegistro } from "./pages/Clientes/Register";
import { ClientesEdit } from "./pages/Clientes/Edit";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quartos" element={<Quartos />} />
          <Route path="quartos/:id" element={<QuartosDetalhes />} />
          <Route path="quartos/registro" element={<QuartosRegistro />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="clientes/:id" element={<ClientesEdit />} />
          <Route path="clientes/registro" element={<ClientesRegistro />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
