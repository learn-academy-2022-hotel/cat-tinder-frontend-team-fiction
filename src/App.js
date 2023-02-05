import React, { useState } from "react"
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
import mockCharacters from "./mockCharacters"


const App = () => {
  const [characters, setCharacters] = useState(mockCharacters)
  const createNewCharacter = (newCharacterObject) => {
      console.log("newCharacterObject:", newCharacterObject)
  }
  const updateCharacter = (character, id) => {
      console.log("character:", character)
      console.log("id:", id)
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

