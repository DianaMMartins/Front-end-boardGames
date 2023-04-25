import { useState, useEffect } from "react";
import { getReviewByReviewId } from "../../utils/apiCalls";
import { ReviewCard } from "../Reviews/ReviewCard";
import { Link, useParams } from "react-router-dom";
import { reviewTitle } from "../../utils/reviewTitle.js";
import "./CategoryPage.css";

export const CategoryPage = () => {
  const { category_slug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewByReviewId(category_slug)
      .then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category_slug]);

  return (
    <section className="category-page">
      <h2>
        {reviews.length > 0
          ? "Category: " + reviewTitle(reviews[0].category)
          : "No reviews found."}
      </h2>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250"
        />
      ) : (
        <ul className="review-box">
          {reviews.map((eachReview) => (
            <Link
              to={`/reviews/${eachReview.review_id}`}
              key={eachReview.review_id}
            >
              <ReviewCard eachReview={eachReview} />
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
};
