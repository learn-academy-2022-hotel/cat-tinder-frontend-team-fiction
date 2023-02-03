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
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characterindex" element={<CharacterIndex characters={characters}/>} />
        <Route path="/charactershow/:id" element={<CharacterShow characters={characters}/>} />
        <Route path="/characternew" element={<CharacterNew />} />
        <Route path="/characteredit" element={<CharacterEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;

