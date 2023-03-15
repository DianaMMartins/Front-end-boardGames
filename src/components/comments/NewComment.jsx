import { useState } from "react";
import { postCommentToReview } from "../../utils.js/apiCalls";
import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const NewComment = ( {review_id },  setComments ) => {
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(UserContext);
  const commentToPost = {
    body: newComment,
    username: user,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentToReview(review_id, commentToPost).then((commentFromApi) => {
      setComments((currentComments) => {
        console.log(currentComments, 'hi ');
        return [commentFromApi, ...currentComments]
      })
    });
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
