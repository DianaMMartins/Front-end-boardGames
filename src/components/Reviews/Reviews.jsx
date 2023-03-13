import { useEffect, useState } from "react";
import { getReviews } from "../../utils.js/apiCalls";
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getReviews().then((reviewsData) => {
      setReviews(reviewsData);
      setIsLoading(false)
    });
  }, []);

  return (
    <section className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (<img src={require(`../../images/loading.gif`)} alt='loading' />) :     
      <ul>
        {reviews.map((eachReview) => {
          return <ReviewCard key={eachReview.review_id} eachReview={eachReview} />;
        })}
      </ul> }
    </section>
  );
};
