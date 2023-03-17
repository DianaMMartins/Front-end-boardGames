import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getReviewByParametric } from "../../utils.js/apiCalls";
import { ReviewCard } from "../Reviews/ReviewCard";

export const CategoryPage = () => {
  const [category, setCategory] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { title } = location.state.title;
  const categoryObj = location.state.title.category;

  useEffect(() => {
    setIsLoading(true);
    setCategory(categoryObj.slug);
      getReviewByParametric(category).then((reviewsFromApi) => {
        setReviews(reviewsFromApi)
        setIsLoading(false);
      });
  }, [category, categoryObj.slug]);

  return (
    <section className="category-page">
      <h3> {title}</h3>
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
          {reviews.map(eachReview => {
            return <ReviewCard eachReview={eachReview} key={eachReview.review_id}/>
          })}
        </ul>
      )}
    </section>
  );
};
