import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <LoginButton/>
      <LogoutButton/>
      </header>
    </div>
  );
}

export default App;
