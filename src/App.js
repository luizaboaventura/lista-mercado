import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Lista from "./pages/Lista";
import Login from "./pages/Login/index";
import Opcoes from "./pages/Opcoes";
import PaginaPadrao from "./pages/PaginaPadrao/index";

function App() {
  return (
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<PaginaPadrao/>}>
              <Route index element={<Login />}></Route>
              <Route path="opcoes" element={<Opcoes />}></Route>
              <Route path="opcoes/lista" element={<Lista/>}></Route>
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    
  );
}

export default App;
