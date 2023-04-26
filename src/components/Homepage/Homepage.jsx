import { HomepageReviews } from "../Reviews/HomepageReviews";
import { HomepageCategories } from "../categories/HomepageCategories";
import "./Homepage.css";

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
