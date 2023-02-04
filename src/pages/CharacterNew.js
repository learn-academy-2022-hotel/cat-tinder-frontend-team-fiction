import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from 'react-router-dom'

const CharacterNew = ({ createNewCharacter }) => {

  const [newCharacter, setNewCharacter] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewCharacter({...newCharacter, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createNewCharacter(newCharacter)
    navigate("/characterindex")
  }
  return (
    <>
    <h1>Add New Character</h1>
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" 
               name="name" 
               placeholder="with a placeholder" 
               id="name" 
               onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input type="text" 
               name="age" 
               placeholder="what's your age?" 
               id="age" 
               onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">Enjoys</Label>
        <Input type="text" 
               name="enjoys" 
               placeholder="what do you like to do?" 
               id="enjoys" 
               onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input type="text" 
               name="image" 
               placeholder="please add image url" 
               id="image" 
               onChange={handleChange} />
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

export default CharacterNew;