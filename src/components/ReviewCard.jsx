import { useEffect, useState } from "react"
import { getReviews } from '../utils.js/apiCalls';

export const ReviewCard = () => {
const [reviews, setReviews] = useState([{
    title: 'Culture a Love of Agriculture With Agricola',
    designer: 'Uwe Rosenberg',
    owner: 'tickle122',
    review_img_url:
      'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?w=700&h=700',
    review_body:
      "You could sum up Agricola with the simple phrase 'Farmyard Fun' but the mechanics and game play add so much more than that. You'll find yourself torn between breeding pigs, or sowing crops. Its joyeous and rewarding and it makes you think of time spent outside, which is much harder to do these days!",
    category: 'strategy',
    created_at: new Date(1610964020514),
    votes: 1
  },]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    getReviews()
}, [])

    return (
        <section className="review-card" >
            <h2>Reviews</h2>
        </section>
    )
}