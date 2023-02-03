import React from 'react'
import { useParams } from "react-router-dom"

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
        // additional character code here
      </>
    )}
    </main>
  )
}

export default CharacterShow;