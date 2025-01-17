import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { Clientes } from "./pages/Clientes/Clientes";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { EditaCliente } from "./pages/EditaCliente/EditaCliente";
import Produtos from "./pages/Produtos/Produtos";
import { NovoProduto } from "./pages/NovoProduto/NovoProduto";
import EditaProduto from "./pages/EditaProduto/EditaProduto";
import { Pets } from "./pages/Pets/Pets";
import { NovoPet } from "./pages/NovoPet/NovoPet";
import { EditaPet } from "./pages/EditaPet/EditaPet";
import { DetalhesPet } from "./pages/DetalhesPets/DetalhesPets";
import { Servicos } from "./pages/Servicos/Servicos";
import { NovoServico } from "./pages/NovoServico/NovoServico";
import { EditaServico } from "./pages/EditaServico/EditaServico";
import InfoSistema from "./pages/InfoSistema/InfoSistema";
import { Agendamentos } from "./pages/Agendamentos/Agendamentos";
import { NovoAgendamento } from "./pages/NovoAgendamento/NovoAgendamento";
import { EditaAgendamento } from "./pages/EditaAgendamento/EditaAgendamento";
import { DetalhesClientes } from "./pages/DetalhesClientes/DetalhesClientes";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/:id" element={<DetalhesClientes />} />
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
          <Route path="/agendamentos/editar/:id" element={<EditaAgendamento />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/novo" element={<NovoServico />} />          
          <Route path="/servicos/atualizar/:id" element={<EditaServico />} />     
          <Route path="/dashboard" element ={<InfoSistema></InfoSistema>}></Route>     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
