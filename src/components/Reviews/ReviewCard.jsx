export const ReviewCard = ({ eachReview }) => {
  return (
    <li key={eachReview.review_id}>
      <h3 className="game-title">{eachReview.title}</h3>
      <p className="game-designer">Game by: {eachReview.designer}</p>
      <img
        src={eachReview.review_img_url}
        alt={`${eachReview.title}`}
      />
      <h4 className="review-by">{eachReview.owner}</h4>
      <p className="category">{eachReview.category}</p>
      <p className="vote-button">
        {eachReview.votes}
        <button>
          <span aria-label="votes for this review">❤️</span>
        </button>
      </p>
      <p className="comments-counter">{eachReview.comment_count}</p>
    </li>
  );
};
