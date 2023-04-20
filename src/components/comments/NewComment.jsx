import { useState } from "react";
import { postCommentToReview } from "../../utils.js/apiCalls";
import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const NewComment = ({ review_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [placeholder, setPlaceholder] = useState("Post a comment here ...");
  const { user } = useContext(UserContext);
  const [submitButton, setSubmitButton] = useState(true);
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
    } else if (commentToPost.body === "") {
      setPlaceholder("Please write something to post a comment");
      setSubmitButton(true);
    } else {
      postCommentToReview(review_id, commentToPost).then(({ comment }) => {
        setComments((currentComments) => {
          setSubmitButton(false);
          return [comment, ...currentComments];
        });
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
          id="new-comment"
          value={newComment}
          placeholder={placeholder}
          disabled={!submitButton}
          rows="10"
          cols="50"
          style={'cursor: progress;'}
          onChange={(event) => setNewComment(event.target.value)}
        />
      </p>
      <button type="submit" disabled={!submitButton}>
        Comment
      </button>
    </form>
  );
};
