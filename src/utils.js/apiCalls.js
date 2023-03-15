import axios from "axios";

const boardGamesApi = axios.create({
  baseURL: "https://board-games.onrender.com/api",
});

export const getReviews = () => {
  return boardGamesApi.get("/reviews").then(({ data }) => {
    return data;
  });
};

export const getReviewById = (review_id) => {
  return boardGamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data;
  });
};

export const postCommentToReview = (review_id, newComment) => {
  return boardGamesApi.post(`/reviews/${review_id}/comments`, { key: newComment}).then((commentFromApi)=>{
    console.log(commentFromApi);
  })
}