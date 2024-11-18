import "./App.css";
import ScrollAnimation from "./components/ScrollAnimation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav style={{ height: "100px" }}></nav>
        <Home />
        <ScrollAnimation />
      </header>
    </div>
  );
}
export default App;
