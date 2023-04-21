import { getCommentFromReview } from "../../utils.js/apiCalls";
import { useState, useEffect } from "react";
import { SingularComment } from "./SingularComment";
import { NewComment } from "./NewComment";
import "./Comments.css";

export const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentFromReview(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  console.log(comments);
  return (
    <section className="comments">
      <h4>Comment section</h4>
      <NewComment review_id={review_id} setComments={setComments} />
      <ul className="comments-list">
        {comments.length > 0 ? (
          comments.map((eachComment) => {
            return (
              <SingularComment
                eachComment={eachComment}
                key={eachComment.comment_id}
              />
            );
          })
        ) : (
          <p> No comments found ... </p>
        )}
      </ul>
    </section>
  );
};
