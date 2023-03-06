import "./App.css";
import Footer from "./assets/componentes/footer/Footer";
import Header from "./assets/componentes/header/Header";
import ContenedorRutas from "./assets/rutas/ContenedorRutas";

function App() {
  return (
    <div className="App">
      <Header/>
      <ContenedorRutas/>
      <Footer/>
    </div>
  );
}

export default App;
