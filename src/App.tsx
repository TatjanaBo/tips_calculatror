import './App.scss';
import Calculator from './components/Calculator';
import { ReactComponent as Logo } from './data/logo.svg';

const App = () => (
  <div className="App">
    <div className="app_wrapper">
      <Logo />
      <Calculator />
    </div>
  </div>
);
export default App;
