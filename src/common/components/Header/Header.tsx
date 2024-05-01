import { useState } from 'react'
import './header.css'

const Header = () => {

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleButton = () => {
    setIsButtonClicked(!isButtonClicked);
    setIsRotated(!isRotated);
  }

  return (
    <header>
      <h1 className='title'>Score Tracker</h1>
      <button 
        className={`burger-button ${isRotated ? 'rotated' : ''}`}
        onClick={toggleButton}
      >
        ☰
      </button>
    </header>
  )
}

export default Header