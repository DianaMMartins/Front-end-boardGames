import { memo } from "react";
import { patchCommentVotes } from "../../utils/apiCalls";
import { UpVoteButton } from "../../utils/upVote";
import "./SingularComment.css";

export const SingularComment = memo(({ eachComment }) => {
  return (
    <section className="comment-card">
      <li className="singular-comment">
        <p id="writer">
          on{" "}
          {new Date(eachComment.created_at).toDateString().slice(4, 8) +
            new Date(eachComment.created_at).toDateString().slice(11, 16)}{" "}
          {eachComment.author} said:{" "}
        </p>

        <p id="comment-body">{eachComment.body}</p>

        <section className="comment-vote">
          <UpVoteButton patchVotes={patchCommentVotes} itemToPatch={eachComment.votes} component_id={eachComment.comment_id} />
        </section>
      </li>
    </section>
  );
});
