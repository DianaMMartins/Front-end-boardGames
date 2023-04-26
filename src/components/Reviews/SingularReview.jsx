import { useCallback, useEffect, useState } from "react";
import { getReviewByReviewId, patchReviewVotes } from "../../utils/apiCalls";
import { useParams } from "react-router-dom";
import "./SingularReview.css";
import { Comments } from "../comments/Comments";
import heart from "../../images/heart.png";
import noHeart from "../../images/heart-empty.png";

export const SingularReview = () => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [voteButton, setVoteButton] = useState(false);
  const [singularReview, setSingularReview] = useState({});
  const [like, setLike] = useState(noHeart);
  const [error, setError] = useState(null);
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

  const upVote = useCallback(async () => {
    setIsLoading(true);
    try {
      if (voteButton === false) {
        setVoteButton(true);
        setLike(heart);
        singularReview.votes += 1;
        await patchReviewVotes(review_id, 1);
      } else {
        setVoteButton(false);
        setLike(noHeart);
        singularReview.votes -= 1;
        await patchReviewVotes(review_id, -1);
      }
    } catch (error) {
      console.error(error);
      setError("Error updating review.");
    } finally {
      setIsLoading(false);
    }
  }, [review_id, voteButton, singularReview]);

  console.log(like);

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
                <button onClick={() => upVote(review_id)}>
                  <span aria-label="votes for this review">
                    {votes + " "}
                    {<img id='heart' src={like} alt="heart" />}
                  </span>
                </button>
              </section>
            </section>
            <Comments review_id={review_id} />
          </section>
        </section>
      )}
    </section>
  );
};
