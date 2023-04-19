import { useEffect, useState } from "react";
import { getReviews } from "../../utils.js/apiCalls";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";
import "./HomepageReviews.css";

export const HomepageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewsFromApi) => {
      const homeReviews = [];
      const noRepeats = [];

      while (noRepeats.length < 8) {
        let random = Math.ceil(Math.random() * reviewsFromApi.length);

        if (!noRepeats.includes(random)) {
          const eachReview = reviewsFromApi[random];
          console.log(eachReview);
          if (eachReview !== undefined) {
            noRepeats.push(random);
            homeReviews.push(eachReview);
          }
        }
      }
      setReviews(homeReviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="reviews">
      <section class="section-reviews">
        <h3 id="reviews-header">Reviews</h3>
        <a href="/reviews">
          <h4 class="more-reviews">See all</h4>
        </a>
      </section>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
          <ul className="review-container">
            {reviews.map((eachReview) => {
              return (
                <Link
                  to={`/reviews/${eachReview.review_id}`}
                  key={eachReview.review_id}
                >
                  <ReviewCard eachReview={eachReview} />
                </Link>
              );
            })}
          </ul>
      )}
    </section>
  );
};
