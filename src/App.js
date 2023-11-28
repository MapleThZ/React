import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a id="testPage" className="App-link" href="/test-page">
          test react
        </a>
        <a className="App-link" href="/home">
          test home
        </a>
      </header>
      {/* <div className="App container">
        <Route path="/test-page" component={TestPage} />
      </div> */}
    </div>
  );
}

export default App;
