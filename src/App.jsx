import { Route, Routes } from "react-router-dom";
import "./App.css";
import Lang from "./pages/Lang/Lang";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lang />} />
      </Routes>
    </div>
  );
}

export default App;
