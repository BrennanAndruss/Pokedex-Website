import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Pokemon } from "./Pokemon"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
