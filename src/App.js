import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Reviews } from './components/Reviews/Reviews';
import { SingularReview } from './components/Reviews/SingularReview';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Reviews />}  />
        <Route path="/reviews/:review_id" element={<SingularReview  />}/>
      </Routes>
    </div>
  );
}

export default App;
