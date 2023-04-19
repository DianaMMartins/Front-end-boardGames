import { useEffect } from "react";
import { useState } from "react";
import {
  getReviewByParametric,
  patchReviewVotes,
} from "../../utils.js/apiCalls";
import { useParams } from "react-router-dom";
import "./SingularReview.css";
import { Comments } from "../comments/Comments";

export const SingularReview = () => {
  const [singularReview, setSingularReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { review_id } = useParams();
  const [voteButton, setVoteButton] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewByParametric(review_id).then((eachReview) => {
      setSingularReview(eachReview.review);
      setIsLoading(false);
    });
  }, [review_id]);

  const upVote = (review_id) => {
    if (voteButton === false) {
      setVoteButton(true);
      setSingularReview((currentReview) => {
        return { ...currentReview, votes: currentReview.votes + 1 };
      });
      patchReviewVotes(review_id, 1).catch(() => {
        setVoteButton(false);
        setSingularReview((currentReview) => {
          return { ...currentReview, votes: currentReview.votes - 1 };
        });
      });
    } else {
      setVoteButton(false);
      setSingularReview((currentReview) => {
        return { ...currentReview, votes: currentReview.votes - 1 };
      });
      patchReviewVotes(review_id, -1).catch(() => {
        setVoteButton(true);
        setSingularReview((currentReview) => {
          return { ...currentReview, votes: currentReview.votes + 1 };
        });
      });
    }
  };

  return (
    <section className="review-box">
      <h2 className="review">{singularReview.title}</h2>
      {isLoading ? (
        <img id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <section>
          <h3>Designed by: {singularReview.designer}</h3>
          <img src={singularReview.review_img_url} alt="review" />
          <p className="review-body">{singularReview.review_body}</p>
          <p className="review-writer">Written by: {singularReview.owner}</p>
          <p className="date">
            on {new Date(singularReview.created_at).toDateString()}
          </p>
          <p className="vote-button">
            {singularReview.votes}
            <button onClick={() => upVote(singularReview.review_id)}>
              <span aria-label="votes for this review">❤️</span>
            </button>
          </p>
          <Comments review_id={review_id} />
        </section>
      )}
    </section>
  );
};
