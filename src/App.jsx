import './App.css';
import Inicio from './components/Inicio/Inicio';
import Caracteristicas from './components/Caracteristicas/Caracteristicas';
import Mid from './components/Mid/Mid';
import InfoValues from './components/InfoValues/InfoValues';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Caracteristicas />
      <Mid />
      <InfoValues />
      <TechStack />
    </div>
  );
}

export default App;
