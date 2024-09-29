import "./App.css";
import { useState } from "react";

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const[isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  };

  const textFollowing = isFollowing ? "Siguiendo" : "Seguir";
  const buttonStyles = isFollowing
  ? "tw-followCard-button is-following"
  : "tw-followCard-button"
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`Avatar de ${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonStyles} onClick={handleClick}>
          {textFollowing}
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;