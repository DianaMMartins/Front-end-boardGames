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
    <section >
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250"
        />
      ) : <section className="category-page">
          { reviews.length > 0 ? 
            (<section>
            <h2>Category: {reviewTitle(reviews[0].category)}</h2>
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
            </section>
          ) : (
            <h2>No reviews found.</h2>
          )}  
            </section>     
      }
    </section>
  );
};
