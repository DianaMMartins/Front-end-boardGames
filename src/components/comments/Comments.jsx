import { getCommentFromReview } from "../../utils.js/apiCalls";
import { useState } from "react";
import { useEffect } from "react";
import { SingularComment } from './SingularComment';

export const Comments = ( {review_id} ) => {
  const [comments, setComments] = useState([]);

  console.log(review_id);
  useEffect(() => {
    getCommentFromReview(review_id).then((comments) => {
      setComments(comments.comments);
    });
  }, []);

  return (
    <section className="comments">
      <h4>Comment section</h4>
      <ul className="comments-list">
        {
        (comments.length > 0) ?
        comments.map((eachComment) => {
          return (
            <SingularComment eachComment={eachComment} key={eachComment.comment_id} />
          );
        }) : <p> No comments found ... </p>
    }
      </ul>
    </section>
  );
};
