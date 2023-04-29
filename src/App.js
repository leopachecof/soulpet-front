import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { Clientes } from "./pages/Clientes/Clientes";
import { EditaCliente } from "./pages/EditaCliente/EditaCliente";
import { Pets } from "./pages/Pets/Pets";
import { DetalhesPet } from "./pages/DetalhesPets/DetalhesPets";
import { EditaPet } from "./pages/EditaPet/EditaPet";
import { NovoPet } from "./pages/NovoPet/NovoPet";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/novo" element={<NovoCliente />} />
          <Route path="/clientes/editar/:id" element={<EditaCliente />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<DetalhesPet />} />
          <Route path="/pets/novo" element={<NovoPet />} />
          <Route path="/pets/editar/:id" element={<EditaPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
