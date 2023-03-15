import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Reviews } from "./components/Reviews/Reviews";
import { SingularReview } from "./components/Reviews/SingularReview";
import { Homepage } from './components/Homepage';
import { Users } from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews/:review_id" element={<SingularReview />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
