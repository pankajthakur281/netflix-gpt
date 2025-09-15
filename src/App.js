import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
          <h1 className="text-5xl font-bold text-white">
            Tailwind is working 🎉
          </h1>
        </div>
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
      </header>
    </div>
  );
}

export default App;
