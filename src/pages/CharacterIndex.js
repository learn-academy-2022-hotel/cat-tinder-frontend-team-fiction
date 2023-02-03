import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const CharacterIndex = ({characters}) => {
  return (
    
    <main className='character-index-cards'>
      {characters?.map((character, index) => {
         return (
          <Card
            style={{
              width: "14rem"
            }}
            key={index}
          >
            <img alt={`profile of a character named Johnny Bravo ${character.name}`} src={character.image} />
            <CardBody>
              <CardTitle tag="h5">{character.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {character.age}
              </CardSubtitle>
              <NavLink to={`/charactershow/${character.id}`} className="nav-link">
                        See More Details yo 
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )}
export default CharacterIndex