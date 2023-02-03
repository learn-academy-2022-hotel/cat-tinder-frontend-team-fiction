import { render, screen } from "@testing-library/react"
import mockCharacters from "../mockCharacters"
import CharacterIndex from "./CharacterIndex"
import { BrowserRouter } from "react-router-dom"

describe("<CharacterIndex />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
        <BrowserRouter>
        <CharacterIndex />
        </BrowserRouter>
        , div)

    })




    it("renders character cards", () => {
        const div = document.createElement("div")
        render (
            <BrowserRouter>
        <CharacterIndex  characters={mockCharacters} />
        </BrowserRouter>
        , div)
        mockCharacters.forEach((character) => {
            const characterName = screen.getByText(character.name)
            expect(characterName).toBeInTheDocument()
        })
    })
  })


  