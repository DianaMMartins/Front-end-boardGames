import { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Reviews } from "./components/Reviews/Reviews";
import { SingularReview } from "./components/Reviews/SingularReview";
import { Homepage } from "./components/Homepage";
import { Users } from "./components/users/Users";
import { UserContext } from "./contexts/Users";
import { LoggedIn } from './components/users/LoggedIn';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      {(user.length > 0) ? <LoggedIn /> : 
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      }
    </div>
  );
}

export default App;
