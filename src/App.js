import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage.components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import NavBar from './Components/NavBar/NavBar.components';
import Routing from './Components/Router/Router.components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routing/>
        <NavBar/>
        {/* <HomePage/> */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
