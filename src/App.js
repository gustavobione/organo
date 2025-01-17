import Banner from './Componentes/Banner';
import CampoTexto from './Componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      < Banner />
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
    </div>
  );
}

export default App;
