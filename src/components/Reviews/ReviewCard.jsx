export const ReviewCard = ({ eachReview }) => {
  return (
    <li className="review-card" key={eachReview.review_id}>
      <img src={eachReview.review_img_url} alt={`${eachReview.title}`} />
      <h3 className="game-title">{eachReview.title}</h3>
      <p className="category">{eachReview.category}</p>
    </li>
  )
};
