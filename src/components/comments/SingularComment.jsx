import './SingularComment.css';

export const SingularComment = ({eachComment}) => {
    
    return (
        <li className="singular-comment">
           <p>{eachComment.author} {eachComment.created_at}</p>
           <p>{eachComment.body}</p> 
           <p className="vote-button">
            {eachComment.votes}
            <button>
              <span aria-label="votes for this review">❤️</span>
            </button>
          </p>
        </li>
    )
}