import logo from './logo.svg';
import './App.css';
import Recipes from './recipe/Recipes'
import Appbar from './UI/appbar/Appbar'
import Searchbar from './UI/searchbar/Searchbar'

function App() {



  return (
    <div className="App">
      <Appbar />
      <header className="App-header">
        <div className="top">
          <Searchbar />
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Recipes/>
      </header>
    </div>
  );
}

export default App;
