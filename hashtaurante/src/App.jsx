import Hashtaurante from "./assets/hashtaurante.webp";
import "./App.css";
import { Navegacao } from "./assets/Navegacao";
export function App() {
  return (
    <>
      <img src={Hashtaurante} alt="Logo da Hashtaurante" className="capa"/>
      <Navegacao />
    </>
  );
}
