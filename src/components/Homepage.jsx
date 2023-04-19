import { HomepageReviews } from "./Reviews/HomepageReviews";
import "./Homepage.css";
import { HomepageCategories } from "./categories/HomepageCategories";

export const Homepage = () => {
  return (
    <section className="homepage">
      <section className="homepage-categories">
      <HomepageCategories />
      </section>
      <section className="homepage-reviews">
        <HomepageReviews />
      </section>
    </section>
  );
};
