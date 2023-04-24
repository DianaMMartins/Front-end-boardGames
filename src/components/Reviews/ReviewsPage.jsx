import { useEffect, useState } from "react";
import { getReviews } from "../../utils/apiCalls";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";
import "./ReviewsPage.css";

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const reviewsFromApi = await getReviews();
        setReviews(reviewsFromApi);
      } catch (error) {
        console.error(error);
        setError("Error fetching reviews.")
      } finally {
        setIsLoading(false);
      } 
    }
    fetchReviews();
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
        ) : error ? (
          <p>{error}</p>
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
