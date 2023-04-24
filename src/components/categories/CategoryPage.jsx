import { useState, useEffect } from "react";
import { getReviewByReviewId } from "../../utils/apiCalls";
import { ReviewCard } from "../Reviews/ReviewCard";
import { Link, useParams } from "react-router-dom";
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

  const improveTitle = (titleToChange) => {
    const capitalizedTitle =
      titleToChange.charAt(0).toUpperCase() + titleToChange.slice(1);
    return capitalizedTitle.replace(/-/g, " ");
  };

  return (
    <section className="category-page">
      <h2>
        {reviews.length > 0
          ? improveTitle(reviews[0].category)
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
