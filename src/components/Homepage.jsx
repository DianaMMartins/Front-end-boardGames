import { HomepageReviews } from "./Reviews/HomepageReviews";
import "./Homepage.css";
import { HomepageCategories } from "./categories/HomepageCategories";

export const Homepage = () => {
  return (
    <section className="homepage">
      <HomepageCategories />
      {/* <section className="homepage-categories">
      </section>
      <section className="homepage-reviews">
        <HomepageReviews />
      </section> */}
    </section>
  );
};
