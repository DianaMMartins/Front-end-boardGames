import { memo } from "react";
import { reviewTitle} from '../../utils/reviewTitle.js'
import "./ReviewCard.css";

export const ReviewCard = memo(({ eachReview }) => {
  return (
    <li className="review-card" key={eachReview.review_id}>
      <img src={eachReview.review_img_url} alt={`${eachReview.title}`} />
      <div className="review-intro">
        <h4 className="game-title">{eachReview.title}</h4>
        <p className="category">{reviewTitle(eachReview.category)}</p>
      </div>
    </li>
  );
});