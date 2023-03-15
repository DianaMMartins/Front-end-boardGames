import { useState } from "react";
import { postCommentToReview } from "../../utils.js/apiCalls";

//review id comes from
export const NewComment = (review_id) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentToReview(review_id, newComment);
  };

  return (
    <form className="post-comment" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">Comments</label>
      <textarea
        id="new-comment"
        value={newComment}
        placeholder="Post a comment here ..."
        onChange={(event) => setNewComment(event.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
};
