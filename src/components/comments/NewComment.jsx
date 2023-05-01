import { useState } from "react";
import { postCommentToReview } from "../../utils/apiCalls";
import { useContext } from "react";
import { UserContext } from "../../contexts/Users";
import { Link } from "react-router-dom";
import "./NewComment.css";

export const NewComment = ({ review_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [placeholder, setPlaceholder] = useState("Post a comment here ...");
  const { user } = useContext(UserContext);
  const [submitButton, setSubmitButton] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const commentToPost = {
    body: newComment,
    username: user,
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (
      commentToPost.username === undefined ||
      commentToPost.username.username === ""
    ) {
      setSubmitButton(false);
      setNewComment("");
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    } else if (commentToPost.body === "") {
      setPlaceholder("Please write something to post a comment");
      setSubmitButton(true);
      setShowErrorMessage(false);
      setShowSuccessMessage(false);
    } else {
      postCommentToReview(review_id, commentToPost)
        .then(({ comment }) => {
          setComments((currentComments) => {
            setSubmitButton(false);
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            return [comment, ...currentComments];
          });
        })
        .catch(() => {
          setShowErrorMessage(true);
          setShowSuccessMessage(false);
        });
      setNewComment("");
      setPlaceholder(commentToPost.body);
    }
  };

  return (
    <section className="post-comment">
      {(user.username === '') ?
      <Link to="/users" className="signin-button">
        Sign in to post a comment
      </Link>
      : <form className="comment-form" onSubmit={handleSubmitComment}>
        <label htmlFor="new-comment"></label>
        <p>
          <textarea
            value={newComment}
            placeholder={placeholder}
            disabled={!submitButton}
            onChange={(event) => setNewComment(event.target.value)}
            className={`${
              showSuccessMessage ? "success success-message" : "new-comment"
            } ${showErrorMessage ? "error error-message" : "new-comment"}`}
          />
        </p>
        <button
          type="submit"
          disabled={!submitButton}
          className={
            showSuccessMessage || showErrorMessage ? "disabled" : "button"
          }
        >
          Comment
        </button>
      </form>}
    </section>
  );
};
