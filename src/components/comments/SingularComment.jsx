import './SingularComment.css';

export const SingularComment = ({eachComment}) => {
    
    return (
        <li className="singular-comment">
          {/* add a Link to user page */}
           <p>Posted by {eachComment.author}</p>
           <p>on {new Date(eachComment.created_at).toDateString()}</p>
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