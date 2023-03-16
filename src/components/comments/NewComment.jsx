import { useState } from "react";
import { postCommentToReview } from "../../utils.js/apiCalls";
import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const NewComment = ( {review_id, setComments} ) => {
  const [newComment, setNewComment] = useState("");
  const [placeholder, setPlaceholder] = useState('Post a comment here ...')
  const { user } = useContext(UserContext);
  const commentToPost = {
    body: newComment,
    username: user,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentToReview(review_id, commentToPost).then(({comment}) => {
      setComments((currentComments) => {
        return [comment, ...currentComments]
      })
    });
    setNewComment('')
    setPlaceholder('Your comment has been posted, thank you!')
  };

  return (
    <form className="post-comment" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">Comment on this review: </label>
      <textarea
        id="new-comment"
        value={newComment}
        placeholder={placeholder}
        onChange={(event) => setNewComment(event.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
};
