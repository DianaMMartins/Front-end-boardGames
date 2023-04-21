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
  const [thumb, setThumb] = useState("👍");

  useEffect(() => {
    setIsLoading(true);
    getReviewByParametric(review_id).then((eachReview) => {
      setSingularReview(eachReview.review);
      setIsLoading(false);
    });
  }, [review_id]);

  console.log(singularReview);

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
                <h3>Designed by: {singularReview.designer}</h3>
              </section>

              <section className="img-content">
                <img src={singularReview.review_img_url} alt="review" />
               
                <section className="review-text">
                  <p className="one-line">
                    Written by: {singularReview.owner} on{" "}
                    {new Date(singularReview.created_at).toDateString()}
                  </p>
                  <p className="review-body">{singularReview.review_body}</p>
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
