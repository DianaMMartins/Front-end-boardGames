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
    getReviews().then((reviewsData) => {
      setReviews(reviewsData);
      setIsLoading(false);
    });
  }, []);

  const HomepageReviews = [];
  if (reviews.length) {
    let reviewCounter = 0;
    while (reviewCounter < 8) {
      reviewCounter++;
      const eachReview = reviews[reviewCounter];
      console.log(eachReview);
      HomepageReviews.push(eachReview);
    }
    console.log(HomepageReviews);
  }
  console.log(reviews);

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
        <ul className="review-container">
          {HomepageReviews.map((eachReview) => {
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
