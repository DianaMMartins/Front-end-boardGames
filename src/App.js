import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import {ReviewsPage} from "./components/Reviews/ReviewsPage";
import { SingularReview } from "./components/Reviews/SingularReview";
import { Homepage } from "./components/Homepage";
import { Users } from "./components/users/LogInPage";

import { Categories } from "./components/categories/Categories";
import { CategoryPage } from "./components/categories/CategoryPage";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingularReview />} />
        <Route path="/users" element={<Users />} />
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
    </div>
  );
}

export default App;
