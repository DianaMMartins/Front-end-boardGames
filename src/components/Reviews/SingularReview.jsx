//will need a Link to=' /reviews/review_id'
import { useEffect } from "react";
import { useState } from "react";
import { getReviewById } from "../../utils.js/apiCalls";
import { useParams } from "react-router-dom";
import './SingleReview.css'

export const SingularReview = () => {
  const [singularReview, setSingularReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((eachReview) => {
      setSingularReview(eachReview.review)
      setIsLoading(false);
    });
  }, []);


  return (
    <section className="review-box">
      <h2 className="review">{singularReview.title}</h2>
      {isLoading ? (
        <img
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <section><h3>Designed by: {singularReview.designer}</h3><img src={singularReview.review_img_url} alt="review" />
        <p className="review-body">{singularReview.review_body}</p>
        <p className="review-writer">Written by: {singularReview.owner}</p>
        <p className="date">on: {singularReview.created_at}</p>
        <p className="vote-button">
        {singularReview.votes}
        <button>
          <span aria-label="votes for this review">❤️</span>
        </button>
      </p>
      <
        </section>
        )}
    </section>
  );
};
