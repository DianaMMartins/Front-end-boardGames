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
      <h2>Reviews</h2>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <section>
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
          <Link to={"reviews"}>
            <button className="more-reviews">See all reviews</button>
          </Link>
        </section>
      )}
    </section>
  );
};
