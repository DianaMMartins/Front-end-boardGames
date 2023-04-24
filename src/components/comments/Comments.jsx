import { getCommentFromReview } from "../../utils/apiCalls";
import { useState, useEffect } from "react";
import { SingularComment } from "./SingularComment";
import { NewComment } from "./NewComment";
import "./Comments.css";
import {memo} from 'react';


export const Comments = memo(({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentFromReview(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

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
})
