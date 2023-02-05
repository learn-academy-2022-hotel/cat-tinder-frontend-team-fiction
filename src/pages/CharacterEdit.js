import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams} from 'react-router-dom'

const CharacterEdit = ({ characters, updateCharacter}) => {

    const { id } = useParams()
    let currentCharacter = characters?.find((character) => character.id === +id)
    
    const [editCharacter, setEditCharacter] = useState({
      name: currentCharacter?.name,
      age: currentCharacter?.age,
      enjoys: currentCharacter?.enjoys,
      image: currentCharacter?.image
    })
    const handleChange = (e) => {
      setEditCharacter({ ...editCharacter, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
      updateCharacter(editCharacter, currentCharacter.id)
      navigate(`/charactershow/${currentCharacter.id}`)
    }
  return (
    <>
    <p>This is the character index page</p>
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" 
               name="name" 
               placeholder="with a placeholder" 
               id="name" 
               onChange={handleChange}
               value={editCharacter.name} />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input type="text" 
               name="age" 
               placeholder="what's your age?" 
               id="age" 
               onChange={handleChange}
               value={editCharacter.age} />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">Enjoys</Label>
        <Input type="text" 
               name="enjoys" 
               placeholder="what do you like to do?" 
               id="enjoys" 
               onChange={handleChange}
               value={editCharacter.enjoys} />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input type="text" 
               name="image" 
               placeholder="please add image url" 
               id="image" 
               onChange={handleChange}
               value={editCharacter.image} />
      </FormGroup>
    </Form>
      <div>
        <Button
          color="primary"
          name="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  )
}

export default CharacterEdit;