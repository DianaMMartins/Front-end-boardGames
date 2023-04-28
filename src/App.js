import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ReviewsPage } from "./components/Reviews/ReviewsPage";
import { SingularReview } from "./components/Reviews/SingularReview";
import { Users } from "./components/users/LogInPage";
import { Categories } from "./components/categories/Categories";
import { CategoryPage } from "./components/categories/CategoryPage";
import { Footer} from "./components/Homepage/Footer";
import { Header} from "./components/Homepage/Header";
import { Homepage} from "./components/Homepage/Homepage.jsx";
import { LogOut } from './components/users/LogOut';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingularReview />} />
        <Route path="/users" element={<Users />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category_slug" element={<CategoryPage />} />
        <Route
          path="/*"
          element={
            <section>
              <h2>No page found! Keep looking ...</h2>
              <img
                id="loading"
                src={require(`./images/missing.gif`)}
                alt="loading"
                width="250vw"
              />
            </section>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
