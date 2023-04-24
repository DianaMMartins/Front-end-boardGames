import { useEffect, useState } from "react";
import { getReviews } from "../../utils/apiCalls";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";
import "./HomepageReviews.css";

export const HomepageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviewsFromApi = await getReviews();
        const homeReviews = [];
        const randomIndices = new Set();

        while (randomIndices.size < 8) {
          const randomIndex = Math.floor(Math.random() * reviewsFromApi.length);
          if (!randomIndices.has(randomIndex)) {
            randomIndices.add(randomIndex);
            homeReviews.push(reviewsFromApi[randomIndex]);
          }
        }
        setReviews(homeReviews);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching reviews.");
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className="reviews">
      <section className="section-reviews">
        <h3 id="reviews-header">Reviews</h3>
        <Link to={"/reviews"}>
          <h4 className="more-reviews">See all</h4>
        </Link>
      </section>
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
          {reviews.map(({ review_id, ...eachReview }) => (
            <Link to={`/reviews/${review_id}`} key={review_id}>
              <ReviewCard eachReview={eachReview} />
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
};
