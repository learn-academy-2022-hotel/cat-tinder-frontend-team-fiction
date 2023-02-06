import React, { useEffect, useState } from "react"
import './App.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import CharacterEdit from "./pages/CharacterEdit"
import CharacterIndex from "./pages/CharacterIndex"
import CharacterNew from "./pages/CharacterNew"
import CharacterShow from "./pages/CharacterShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
// import mockCharacters from "./mockCharacters"


const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {readCharacter() }, [])

  const readCharacter = () => {
    fetch("http://localhost:3000/characters")
      .then((response) => response.json())
      .then((payload) => {
        setCharacters(payload)
      })
      .catch(error => console.log(error))
  }

  const createNewCharacter = (character) => {
    fetch("http://localhost:3000/characters", {
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readCharacter())
      .catch((errors) => console.log("character create errors:", errors))
  }
  
  const updateCharacter = (character, id) => {
    fetch(`http://localhost:3000/characters/${id}`, {
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readCharacter())
    .catch((errors) => console.log("Character update errors:", errors))
  }

    return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characterindex" element={<CharacterIndex characters={characters}/>} />
        <Route path="/charactershow/:id" element={<CharacterShow characters={characters}/>} />
        <Route path="/characternew" element={<CharacterNew createNewCharacter={createNewCharacter}/>} />
        <Route path="/characteredit/:id" element={<CharacterEdit characters={characters} updateCharacter={updateCharacter} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;

