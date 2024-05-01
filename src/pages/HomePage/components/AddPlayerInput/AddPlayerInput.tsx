import './addPlayerInput.css';
import { ChangeEvent, FormEvent, useState } from "react";

const AddPlayerInput: React.FC<{
  onAddPlayer: (playerName: string) => void
}> = ({ onAddPlayer }) => {

  const [playerName, setPlayerName] = useState("")

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (playerName.trim().length <= 1) return
    onAddPlayer(playerName);
    setPlayerName('');
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <form className='add-player-form' onSubmit={onFormSubmit}>
      <input
        className='add-player-input'
        type="text" onChange={onInputChange}
        placeholder="Playername"
        value={playerName}
      />
      <button className='add-player-button'>
        <span className='add-player-span'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
          </svg>
        </span>
      </button>
    </form>
  )
}

export default AddPlayerInput