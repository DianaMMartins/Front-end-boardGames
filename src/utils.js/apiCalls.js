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
  return boardGamesApi.post(`/reviews/${review_id}/comments`, newComment).then((commentFromApi)=>{
    console.log(commentFromApi);
  })
}

export const getCommentFromReview = (review_id) => {
  return boardGamesApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const patchReviewVotes = (review_id, vote) => {
  console.log(vote, review_id);
  return boardGamesApi
    .patch(`/reviews/${review_id}/comments`, { inc_votes: vote })
    .then(({ data }) => {
      return data.review;
    });
};












export const getCategories = () => {
  return boardGamesApi
    .get(`/categories`)
    .then(({ data }) => {
      return data;
    });
}