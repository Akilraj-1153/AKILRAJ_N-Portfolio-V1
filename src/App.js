
import './App.css';
import HomePage from './components/HomePage';
import Akilimage from './images/Homeimg.jpg';
import Logo from './images/HomeLogo3.png';

function App() {
  return (
    <div className="App">
      <HomePage image={Akilimage} logo={Logo}></HomePage>
    </div>
  );
}

export default App;
