
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovocolaborardorAdicionado = (colaborador) => {

    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovocolaborardorAdicionado}/>
    </div>
  );
}

export default App;
