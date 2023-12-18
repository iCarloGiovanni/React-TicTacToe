import { useState } from "react";

const Player = ({initialName, symbol, isActive, onChangeName}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const changeName = (event) => {
        setPlayerName(event.target.value);
    }

    const handleEditClick = () => {
        setIsEditing(editing => !editing);

        if(isEditing) {
          onChangeName(symbol, playerName);
        }
    }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? 
        <input type="text" value={playerName} onChange={changeName} required /> :
        <span className="player-name">{playerName}</span>
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
