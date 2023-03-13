import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Reviews } from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Reviews />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
