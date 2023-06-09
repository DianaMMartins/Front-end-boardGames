import axios from "axios";

const boardGamesApi = axios.create({
  baseURL: "https://board-games.onrender.com/api",
});

export const getReviews = () => {
  return boardGamesApi.get("/reviews").then(({ data }) => {
    return data;
  });
};
export const getUsers = () => {
  return boardGamesApi.get("/users").then(({ data }) => {
    return data;
  });
};

export const getReviewByReviewId = (review_id) => {
  return boardGamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data;
  });
};

export const postCommentToReview = (review_id, newComment) => {
  return boardGamesApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    });
};

export const getCommentFromReview = (review_id) => {
  return boardGamesApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchReviewVotes = (review_id, vote) => {
  return boardGamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.review;
    });
};

export const getCategories = () => {
  return boardGamesApi.get(`/categories`).then(({data}) => {
    return data;
  });
};

export const patchCommentVotes = (comment_id, vote) => {
  return boardGamesApi.patch(`/comments/${comment_id}`, {votes: vote}).then(({data}) => {
    return data.comment})
}