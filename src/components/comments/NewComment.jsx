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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      commentToPost.username === undefined ||
      commentToPost.username.username === ""
    ) {
      setSubmitButton(false);
      setNewComment("");
      setPlaceholder("Please sign in to leave a review!");
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    } else if (commentToPost.body === "") {
      setPlaceholder("Please write something to post a comment");
      setSubmitButton(true);
      setShowErrorMessage(true);
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
      setPlaceholder(
        "Your comment has been posted, thank you! You can only leave one review!"
      );
    }
  };

  return (
    <form className="post-comment" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">Comment on this review: </label>
      <p>
        <textarea
          value={newComment}
          placeholder={placeholder}
          disabled={!submitButton}
          onChange={(event) => setNewComment(event.target.value)}
          className={`${showSuccessMessage ? "success" : "new-comment"} ${
            showErrorMessage ? "error" : "new-comment"
          }`}
        />
      </p>
      {showSuccessMessage && (
        <section className="success-message">
          Your comment has been posted!
        </section>
      )}
      {showErrorMessage && (
        <section className="error-message">
          There was an error posting your comment.
          <br></br>
          {placeholder}
        </section>
      )}
      {placeholder === "Please sign in to leave a review!" ? (
        <Link to="/users" className="button">
          Sign In
        </Link>
      ) : (
        <button
          type="submit"
          disabled={!submitButton}
          className={
            showSuccessMessage || showErrorMessage ? "disabled" : "button"
          }
        >
          Comment
        </button>
      )}
    </form>
  );
};
