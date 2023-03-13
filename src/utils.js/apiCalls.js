import axios from "axios";

const boardGamesApi = axios.create({
  baseURL: "https://board-games.onrender.com/api",
});

export const getReviews = () => {
  return boardGamesApi.get("/reviews").then(({ data }) => {
    console.log(data);
  });
};
