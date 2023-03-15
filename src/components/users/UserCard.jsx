export const UserCard = ({ eachUser }) => {
  return (
    <li className="user-li" key={eachUser.name}>
      <h3>{eachUser.name}</h3>
      <img src={eachUser.avatar_url} alt="avatar" width="150vw" />
      <p>
        <button className="sign-in">Sign in</button>
      </p>
    </li>
  );
};
