import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { ReviewCard } from "./components/ReviewCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ReviewCard />} />
      </Routes>
    </div>
  );
}

export default App;
