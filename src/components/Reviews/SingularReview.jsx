//will need a Link to=' /reviews/review_id'
import { useEffect } from "react";
import { useState } from "react";
import { getReviewById } from "../../utils.js/apiCalls";
import { useParams } from "react-router-dom";
//get review by id

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
    <section className="singular-review">
      <h2 className="review">Review</h2>
      {isLoading ? (
        <img
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <ul>hi</ul>
      )}
    </section>
  );
};
