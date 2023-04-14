import { useEffect, useState } from "react";
import { getReviews } from "../../utils.js/apiCalls";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";
import "./HomepageReviews.css";

export const HomepageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewsData) => {
      setReviews(reviewsData);
      setIsLoading(false);
    });
  }, []);

  const homeReviews = [];
  if (reviews.length) {
    let reviewCounter = 0;
    const noRepeats = [];
    while (reviewCounter < 8) {
      let random = Math.ceil(Math.random() * reviews.length);
      if (!noRepeats.includes(random)) {
        noRepeats.push(random);
        reviewCounter++;
        const eachReview = reviews[random];
        homeReviews.push(eachReview);
      }
    }
  }

  return (
    <section className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <section>

        <ul className="review-container">
          {homeReviews.map((eachReview) => {
            return (
              <Link to={`/reviews/${eachReview.review_id}`} key={eachReview.review_id}>
                <ReviewCard eachReview={eachReview} />
              </Link>
            );
          })}
        </ul>
       <Link to={'reviews'} >
        <button className="more-reviews">See all reviews</button>
       </Link>
          </section>
      )}
    </section>
  );
};
