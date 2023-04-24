import { useEffect } from "react";
import { useState } from "react";
import { getReviewByReviewId, patchReviewVotes } from "../../utils/apiCalls";
import { useParams } from "react-router-dom";
import "./SingularReview.css";
import { Comments } from "../comments/Comments";

export const SingularReview = () => {
  const [singularReview, setSingularReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { review_id } = useParams();
  const [voteButton, setVoteButton] = useState(false);
  const [thumb, setThumb] = useState("👍");

  useEffect(() => {
    setIsLoading(true);
    getReviewByReviewId(review_id).then((eachReview) => {
      setSingularReview(eachReview.review);
      setIsLoading(false);
    });
  }, [review_id]);

  const upVote = (review_id) => {
    if (voteButton === false) {
      setVoteButton(true);
      setThumb("👎");
      setSingularReview((currentReview) => {
        return { ...currentReview, votes: currentReview.votes + 1 };
      });
      patchReviewVotes(review_id, 1).catch(() => {
        setVoteButton(false);
        setThumb("👍");
        setSingularReview((currentReview) => {
          return { ...currentReview, votes: currentReview.votes - 1 };
        });
      });
    } else {
      setVoteButton(false);
      setThumb("👍");
      setSingularReview((currentReview) => {
        return { ...currentReview, votes: currentReview.votes - 1 };
      });
      patchReviewVotes(review_id, -1).catch(() => {
        setVoteButton(true);
        setThumb("👎");
        setSingularReview((currentReview) => {
          return { ...currentReview, votes: currentReview.votes + 1 };
        });
      });
    }
  };

  return (
    <section className="review-page">
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <section>
          <section className="review-box">
            <section className="review-section">
              <section className="review-header">
                <h2>{singularReview.title}</h2>
                <h3>Game designed by: {singularReview.designer}</h3>
              </section>

              <section className="img-content">
                <section className="img-box">
                  <img src={singularReview.review_img_url} alt="review" />
                </section>

                <section className="review-text">
                  <p className="review-body">{singularReview.review_body}</p>
                  <p className="one-line">
                    Review written by: {singularReview.owner} <br />
                    on: {new Date(singularReview.created_at).toDateString()}
                  </p>
                </section>
              </section>

              <section className="vote-button">
                <button onClick={() => upVote(singularReview.review_id)}>
                  <span aria-label="votes for this review">
                    {singularReview.votes + " "}
                    {" " + thumb}
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
