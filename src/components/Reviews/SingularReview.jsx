import { useEffect, useState } from "react";
import { getReviewByReviewId, patchReviewVotes } from "../../utils/apiCalls";
import { useParams } from "react-router-dom";
import "./SingularReview.css";
import { Comments } from "../comments/Comments";
import { UpVoteButton } from "../../utils/upVote";

export const SingularReview = () => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [singularReview, setSingularReview] = useState({});
  const [error] = useState(null);
  const {
    title,
    designer,
    review_img_url,
    review_body,
    owner,
    created_at,
    votes,
  } = singularReview;

  useEffect(() => {
    const fetchReview = async () => {
      setIsLoading(true);
      const eachReview = await getReviewByReviewId(review_id);
      setSingularReview(eachReview.review);
      setIsLoading(false);
    };
    fetchReview();
  }, [review_id]);

  return (
    <section className="review-page">
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
        <section>
          <section className="review-box">
            <section className="review-section">
              <section className="review-header">
                <h2>{title}</h2>
                <h3>Game designed by: {designer}</h3>
              </section>

              <section className="img-content">
                <section className="img-box">
                  <img src={review_img_url} alt="review" />
                </section>

                <section className="review-text">
                  <p className="review-body">{review_body}</p>
                  <p className="one-line">
                    Review written by: {owner} <br />
                    on: {new Date(created_at).toDateString()}
                  </p>
                </section>
              </section>

              <section className="vote-button">
                <UpVoteButton
                  patchVotes={patchReviewVotes}
                  itemToPatch={votes}
                  component_id={review_id}
                />
              </section>

            </section>
            <Comments review_id={review_id} />
          </section>
        </section>
      )}
    </section>
  );
};
