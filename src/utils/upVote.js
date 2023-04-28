import { useCallback, useRef, useState } from "react";
import heart from "../images/heart.png";
import noHeart from "../images/heart-empty.png";

export const UpVoteButton = ({ patchVotes, itemToPatch, component_id }) => {
  const [voteButton, setVoteButton] = useState(false);
  const [ setError] = useState(null);
  const [like, setLike] = useState(noHeart);
  const voteUpdated = useRef(itemToPatch);

  const upVote = useCallback(async () => {
    try {
      if (voteButton === false) {
        setVoteButton(true);
        setLike(heart);
        voteUpdated.current +=1;
        await patchVotes(component_id, 1);
      } else {
        setVoteButton(false);
        setLike(noHeart);
        voteUpdated.current -=1;
        await patchVotes(component_id, -1);
      }
    } catch (error) {
      console.error(error);
      setError("Error updating votes.");
    } 
  }, [component_id, patchVotes, setError, voteButton]);

  return (
      <button onClick={upVote}>
        <span aria-label="votes">
          {voteUpdated.current + " "}
          {<img id='heart' src={like} alt="heart" />}
        </span>
      </button>
  );
};
