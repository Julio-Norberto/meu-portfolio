import './App.css';
import Inicio from './components/Inicio/Inicio';
import Caracteristicas from './components/Caracteristicas/Caracteristicas';
import Mid from './components/Mid/Mid';
import InfoValues from './components/InfoValues/InfoValues';
import TechStack from './components/TechStack/TechStack';
import NeedMore from './components/NeedMore/NeedMore';
import LatestWorks from './components/LatestWorks/LatestWorks';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Caracteristicas />
      <Mid />
      <InfoValues />
      <TechStack />
      <NeedMore />
      <LatestWorks />
      <Footer />
    </div>
  );
}

export default App;
