import React from 'react'
import { useParams, NavLink } from "react-router-dom"

const CharacterShow = ({ characters }) => {
  const { id } = useParams()
  let currentCharacter = characters?.find((character) => character.id === +id)
  return (
    <main className="character-show-cards">
    {currentCharacter && (
      <>
        <img
          alt={`profile of a character named ${currentCharacter.name}`}
          src={currentCharacter.image}
          className="character-show-img"
        />
        <div className="card-text">
        <h3>Age: {currentCharacter.age}</h3>
        <p>Enjoys: {currentCharacter.enjoys}</p>
        <NavLink to={`/characteredit/${currentCharacter.id}`} className="nav-link">Edit Character Profile
        </NavLink>
        </div>
      </>
    )}
    </main>
  )
}

export default CharacterShow;