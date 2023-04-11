import { useEffect, useState } from "react";
import { getReviews } from "../../utils.js/apiCalls";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewsData) => {
      setReviews(reviewsData);
      setIsLoading(false);
    });
  }, []);

  //limit to display only 10 reviews
  return (
    <section className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        <img
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <ul className="review-container">
          {reviews.map((eachReview) => {
            return (
              <Link to={`/reviews/${eachReview.review_id}`} key={eachReview.review_id}>
                <ReviewCard eachReview={eachReview} />
              </Link>
            );
          })}
        </ul>
      )}
    </section>
  );
};
