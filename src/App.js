import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { Clientes } from "./pages/Clientes/Clientes";
import { EditaCliente } from "./pages/EditaCliente/EditaCliente";
import Produtos from "./pages/Produtos/Produtos";
import EditaProduto from "./pages/EditaProduto/EditaProduto";
import NovoProduto from "./pages/NovoProduto/NovoProduto";

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

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
