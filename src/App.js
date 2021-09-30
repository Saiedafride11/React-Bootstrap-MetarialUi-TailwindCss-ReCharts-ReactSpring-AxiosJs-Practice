import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from './components/ReactBootstrap/ReactBootstrap';
import MaterialUi from './components/MaterialUi/MaterialUi';
import ThailwindCss from './components/ThailwindCss/ThailwindCss';
import Recharts from './components/Recharts/Recharts';
import AxiosJs from './components/AxiosJs/AxiosJs';
import ReactSpring from './components/ReactSpring/ReactSpring';

function App() {

  return (
    <div className="App">
        <ReactBootstrap></ReactBootstrap>
        <MaterialUi></MaterialUi>
        <ThailwindCss></ThailwindCss>
        <Recharts></Recharts>
        <AxiosJs></AxiosJs>
        <ReactSpring></ReactSpring>
    </div>
  );
}

export default App;
