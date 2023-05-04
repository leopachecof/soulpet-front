import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { Clientes } from "./pages/Clientes/Clientes";
import { EditaCliente } from "./pages/EditaCliente/EditaCliente";
import Produtos from "./pages/Produtos/Produtos";
import EditaProduto from "./pages/EditaProduto/EditaProduto";
import NovoProduto from "./pages/NovoProduto/NovoProduto";
import { Pets } from "./pages/Pets/Pets";
import { DetalhesPet } from "./pages/DetalhesPets/DetalhesPets";
import { EditaPet } from "./pages/EditaPet/EditaPet";
import { NovoPet } from "./pages/NovoPet/NovoPet";
import Agendamentos from "./pages/Agendamentos/Agendamentos";
import NovoAgendamento from "./pages/NovoAgendamento/NovoAgendamento";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/novo" element={<NovoCliente />} />
          <Route path="/clientes/editar/:id" element={<EditaCliente />} />
          <Route path="/produtos" element={<Produtos></Produtos>}></Route>
          <Route path="/produtos/editar/:id" element={<EditaProduto> </EditaProduto>}></Route>
          <Route path="/produtos/novo" element={<NovoProduto></NovoProduto>}></Route>
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<DetalhesPet />} />
          <Route path="/pets/novo" element={<NovoPet />} />
          <Route path="/pets/editar/:id" element={<EditaPet />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/agendamentos/novo" element={<NovoAgendamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
