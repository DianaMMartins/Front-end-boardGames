import { useState } from "react";
import { postCommentToReview } from "../../utils.js/apiCalls";

//review id comes from
export const NewComment = (review_id) => {
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const commentToPost = {
      body: newComment,
      username: username
  }

  console.log(commentToPost, review_id);
  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentToReview(review_id, commentToPost);
  };



  return (
    <form className="post-comment" onSubmit={handleSubmit}>
    <label htmlFor="new-username">Post as:</label>
      <textarea
        id="new-username"
        onChange={(event) => setUsername(event.target.value)}
      />
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
