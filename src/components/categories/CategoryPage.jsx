import { useState } from "react";
import { useEffect } from "react";
import { getReviewByParametric } from "../../utils.js/apiCalls";
import { ReviewCard } from "../Reviews/ReviewCard";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { category_slug } = useParams();
  const [category, setCategory] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCategory(category_slug);
    getReviewByParametric(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [category, category_slug]);

  return (
    <section className="category-page">
      <h3> Category</h3>
      <h4>Reviews</h4>
      {isLoading ? (
        <img
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <ul className="review-box">
          hi
          {reviews.map((eachReview) => {
            return (
              <ReviewCard eachReview={eachReview} key={eachReview.review_id} />
            );
          })}
        </ul>
      )}
    </section>
  );
};
