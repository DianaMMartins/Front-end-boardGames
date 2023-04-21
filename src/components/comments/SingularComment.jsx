import "./SingularComment.css";

export const SingularComment = ({ eachComment }) => {
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
          <button>❤️</button>
          {eachComment.votes} votes on this comment
        </section>
      </li>
    </section>
  );
};
